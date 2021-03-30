// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
// Auth reducers and selectors
import { AppState} from '../../../core/reducers/';
import { isLoggedIn } from '../_selectors/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		const urlSplitArray = (state.url).split('/');
		let userRole = '';
		if (urlSplitArray.length > 0 && urlSplitArray[1]) {
			userRole = urlSplitArray[1];
		}
        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {
					if (!loggedIn) {
						let role = localStorage.getItem('userRole');
						console.log('=====AuthGuard=====canActivate role=>', role);
						this.router.navigateByUrl(`/${role}`);
						// this.router.navigateByUrl('/auth/login');
                    }
                })
            );
    }
}
