import { SharedService } from 'src/app/views/services/shared.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AuthNoticeService, AuthService } from 'src/app/core/auth';
import { LayoutUtilsService } from 'src/app/core/_base/crud';
import { SubheaderService } from 'src/app/core/_base/layout';

import { CommonService } from 'src/app/views/services/common.service';
import { CommonAPIService } from 'src/app/views/services/common/common-api.service';
import { RoleService } from 'src/app/views/services/role/role.service';

import { usersDataList } from 'src/app/_model/userDummyData.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'kt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userForm: FormGroup;
  public searchKeyword = "";
  public index = 1;
  public page = 1;
  public limit = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageIndex: number = 0;
  public totalData = 0;
  public users = [];
  public countries: any[] = new Array();
  public states: any[] = new Array();
  public cities: any[] = new Array();
  public companies: any[] = new Array();
  public user;
  public hasFormErrors = false;
  public errorMessage = "";
  public formTitle = "";
  public isInEditMode: boolean = false;
  public dataSource: MatTableDataSource<any[]> = new MatTableDataSource();
  public loadingSubject = new BehaviorSubject<boolean>(true);
  public filter: any;
  public showLoader$: Observable<boolean> = of(false);
  public userListData = [];
  public displayedColumns: string[] = [
    "srNo",
    "uniqueId",
    "name",
    "role",
    "phoneNumber",
    "email",
    "status",
    "action",
  ];

  public roleList: any[] = [
    { id: 1, name: "SUB_USER", value: "Sub User" },
    { id: 2, name: "SUB_ADMIN", value: "Sub Admin" }

  ]
  usersList: any;

  constructor(
    private subheaderService: SubheaderService,
    public changeDetectorRef: ChangeDetectorRef,
    private authNoticeService: AuthNoticeService,
    private layoutUtilsService: LayoutUtilsService,
    public cService: CommonService,
    public sharedservice: SharedService,
    public commonAPIService: CommonAPIService,
    public translate: TranslateService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private authService: AuthService,
    public roleService: RoleService


  ) {
    this.initForm();
    this.sharedservice.getUserListData().subscribe(userData => {

    });
  }

  ngOnInit() {

    this.subheaderService.setTitle(this.translate.instant('USER.MAIN_TITLE'))

    this.loadingSubject = new BehaviorSubject<boolean>(true);
    setTimeout(() => {
      this.userListData = usersDataList;
      const userListData = this.userListData;
      this.sharedservice.storeUserListData(userListData);
    }, 2000)


    this.getUserData();

  }

  getUserData() {

    this.usersList = this.sharedservice.getUserListData().subscribe(userData => {
      console.log("userData", userData)
      this.loadingSubject = new BehaviorSubject<boolean>(false);
      this.users = userData; userData.filter((x) => x.status != 'DELETED');
      this.totalData = this.users.length;
      this.dataSource = new MatTableDataSource(this.users);

      this.changeDetectorRef.detectChanges();
    });
  }



  updateStatus(id, status, message) {

    let userData = this.users;
    let isFound = this.users.find((x) => x.id == id);
    const idx: number = userData.indexOf(isFound);

    let obj = isFound;
    obj.status = status;

    if (idx !== -1) {

      userData.splice(idx, 1, obj);
      this.sharedservice.storeUserListData(userData);
      this.users = userData.filter((x) => x.status != 'DELETED');
      this.totalData = this.users.length;
      this.changeDetectorRef.detectChanges();
      this.dataSource = new MatTableDataSource(this.users);

    }

    if (status != 'DELETED') {


      if (status == 'DEACTIVE')
        this.cService.showToast(this.translate.instant('USER.API_MESSAGES.UPDATE_STATUS_SUCCESS', { message: this.translate.instant('USER.USER_LIST.ACTIONS_TOOLTIP.DEACTIVATE') }));
      else
        this.cService.showToast(this.translate.instant('USER.API_MESSAGES.UPDATE_STATUS_SUCCESS', { message: this.translate.instant('USER.USER_LIST.ACTIONS_TOOLTIP.ACTIVATE') }));

    } else {
      this.cService.showToast(this.translate.instant('USER.API_MESSAGES.DELETE_USER_SUCCESS'));
    }




  }

  deactiveUser(id, status, message) {
    const _title = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DEACTIVE_MODEL_TITLE');
    const _description = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DEACTIVE_MODEL_DESCRIPTION');
    const _waitDesciption = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DEACTIVE_MODEL_WAIT_DESCRIPTION');

    const dialogRef = this.layoutUtilsService.confirmElement(
      _title,
      _description,
      _waitDesciption
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.updateStatus(id, status, message);
      }
    });
  }

  deleteUser(user, status, message) {

    const _title = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DELETE_MODEL_TITLE');
    const _description = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DELETE_MODEL_DESCRIPTION', { firstName: user.firstName, lastName: user.lastName });
    const _waitDesciption = this.translate.instant('USER.USER_LIST.CONFIRM_DIALOGS.USER_DELETE_MODEL_WAIT_DESCRIPTION', { firstName: user.firstName, lastName: user.lastName });

    const dialogRef = this.layoutUtilsService.deleteElement(
      _title,
      _description,
      _waitDesciption
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.updateStatus(user.id, status, message);
      }
    });
  }

  openModal(content) {
    this.isInEditMode = false;

    this.formTitle = this.translate.instant('USER.ADD_USER_LABEL');
    this.userForm.reset();
    this.modalService.open(content);
  }

  editDetails(userId, content) {
    this.formTitle = this.translate.instant('USER.UPDATE_USER_LABEL');

    this.userForm.reset();
    this.isInEditMode = true;
    this.user = this.users.find((x) => x.id == userId);
    this.setValue();

    this.modalService.open(content);
  }

  setValue() {
    this.userForm.setValue({
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      username: this.user.username,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      role: this.user.role.id,
      status: this.user.status,
      uniqueId: this.user.uniqueId

    });
    this.userForm.get('id').setValue(this.user.id);
  }


  submit() {
    if (this.userForm.valid) {
      this.userListData.sort(function (a, b) {
        return a.id - b.id;
      });

      this.modalService.dismissAll();


      // if (this.isInEditMode) {

     
      //   let userData = this.users;
      //   const isFound = this.users.find((x) => x.id == this.userForm.value.id);
      //   const idx: number = userData.indexOf(isFound);


      //   if (idx !== -1) {
      //     const obj = this.userForm.value;
      //     obj.role = this.roleList.find((x) => x.id == this.userForm.value.role);
      //     userData.splice(idx, 1, obj);
      //     this.sharedservice.storeUserListData(userData);
      //   }
      //   this.cService.showToast(this.translate.instant('USER.API_MESSAGES.USER_UPDATED_SUCCESS'));

      // } else {

      //   const id = parseInt(this.userListData[this.userListData.length - 1].id)
      //   const role = this.roleList.find((x) => x.id == this.userForm.value.role);
      //   this.userForm.patchValue({ id: id + 1, status: 'ACTIVE', uniqueId: "U00" + (id + 1) })
      //   const userData = this.users;
      //   const obj = this.userForm.value;
      //   obj.role = this.roleList.find((x) => x.id == this.userForm.value.role);
      //   userData.push(this.userForm.value)
      //   this.sharedservice.storeUserListData(userData);
      //   this.cService.showToast(this.translate.instant('USER.API_MESSAGES.USER_ADDED_SUCCESS'));
      // }



      let userData = this.users;
 
      if (this.isInEditMode) {
        const isFound = this.users.find((x) => x.id == this.userForm.value.id);
        const idx: number = userData.indexOf(isFound);
        if (idx !== -1) {
          const obj = this.userForm.value;
          obj.role = this.roleList.find((x) => x.id == this.userForm.value.role);
          userData.splice(idx, 1, obj);
          this.sharedservice.storeUserListData(userData);
        }
        this.cService.showToast(this.translate.instant('USER.API_MESSAGES.USER_UPDATED_SUCCESS'));

      } else {

        const id = parseInt(this.userListData[this.userListData.length - 1].id)
               this.userForm.patchValue({ id: id + 1, status: 'ACTIVE', uniqueId: "U00" + (id + 1) })
        
        const obj = this.userForm.value;
        obj.role = this.roleList.find((x) => x.id == this.userForm.value.role);
        userData.push(this.userForm.value)
        this.sharedservice.storeUserListData(userData);
        this.cService.showToast(this.translate.instant('USER.API_MESSAGES.USER_ADDED_SUCCESS'));
      }
      this.userForm.reset();
      this.changeDetectorRef.detectChanges();
      this.modalService.dismissAll();
    } else {
      this.cService.markFormGroupTouched(this.userForm);

    }
  }



  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  resetData() {
    this.users = [];
    this.pageIndex = 0;
    this.page = 1;
    this.totalData = 0;
    this.searchKeyword = "";
  }

  onPaginationChange(event) {
    this.showLoader$ = of(true);

    if (event.pageIndex > this.pageIndex) {
      this.pageIndex = event.pageIndex;
      this.page = this.page + 1;
    } else {
      this.pageIndex = event.pageIndex;
      this.page = this.page - 1;
    }
    if (this.limit != event.pageSize) {
      this.limit = event.pageSize;
      this.page = 1;
      this.pageIndex = 0;
    }

    this.getUserData();
  }

  onNameChange() {
    let uName = "";
    if (this.userForm.get("lastName").value) {
      uName = uName + this.userForm.get("lastName").value;
    }
    if (this.userForm.get("firstName").value) {
      uName = uName + this.userForm.get("firstName").value.charAt(0);
    }
    this.userForm.get("username").setValue(uName);
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      id: [""],
      firstName: ["", [Validators.required,Validators.pattern("^[a-zA-Z]{1}|[a-zA-Z]{200}$")]],
      lastName: ["", [Validators.required,Validators.pattern("^[a-zA-Z]{1}|[a-zA-Z]{200}$")]],
      username: ["", [Validators.required], this.validateUserIdNotTaken.bind(this)],
      email: ["",
        [Validators.required,
        Validators.email,
        Validators.pattern(
          "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        )],
        this.validateEmailNotTaken.bind(this)],
      phoneNumber: ["", [Validators.required]],
      role: ["", [Validators.required]],
      status: [""],
      uniqueId: [""]

    });
  }


  validateEmailNotTaken(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      let obj = {
        username: control.value,
        email: control.value,
        id: this.userForm.get('id').value
      }

      let isFound = this.users.find((x) => x.email == control.value && x.id != this.userForm.get('id').value);
      if (isFound)
        return resolve({ 'emailExist': true })
      return resolve(null);
    });
  }

  validateUserIdNotTaken(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      let obj = {
        username: control.value,
        id: this.userForm.get('id').value
      }

      let isFound = this.users.find((x) => x.username == control.value && x.id != this.userForm.get('id').value);
      if (isFound)
        return resolve({ 'userIdExist': true })
      return resolve(null);


    });
  }

}
