import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { AuthNoticeService, AuthService, Login } from '../../../../core/auth';
import { AppState } from '../../../../core/reducers';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/views/services/shared.service';
import {SubUserService} from 'src/app/views/services/sub-user/sub-user.service'
import { currentUser } from 'src/app/_model/userDummyData.model';
@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

	loginForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];
	private unsubscribe: Subject<any>;
	private returnUrl: any;

	constructor(
		private router: Router,
		private authService: AuthService,
		private authNoticeService: AuthNoticeService,
		private sharedService: SharedService,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
		private store: Store<AppState>,
		private subUserService: SubUserService
	) { this.unsubscribe = new Subject(); }

	ngOnInit(): void {
		this.initForm();
	}

	onSubmit() {
		if (this.loginForm.valid) {
			const currentUserData=currentUser;

			this.sharedService.setAccessToken(currentUserData.accessToken);
					this.sharedService.setUser(currentUserData);
					this.sharedService.setRole(currentUserData.role);
					this.router.navigate(["/" + currentUserData.role]);
			
		} else {
			this.markFormGroupTouched(this.loginForm);
		
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	initForm() {
		this.loginForm = this.fb.group({
			email: ['',Validators.compose([
				Validators.required,
				Validators.pattern(
				  "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
				),
			  ])],
			password: ['', [Validators.required]],
		});
	}


	markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach((control) => {
			control.markAsTouched();
			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}


	setPermisions(roleId){
		this.subUserService.getUserRolebyRoleId(roleId).subscribe(response => {
			this.sharedService.setSubUserPermissions(JSON.stringify(response.data));
		})
	}
}
