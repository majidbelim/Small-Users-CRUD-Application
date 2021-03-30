import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer, AuthEffects } from 'src/app/core/auth';
import { SharedModule } from 'src/app/core/common/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PortletModule } from '../../partials/content/general/portlet/portlet.module';
import { PartialsModule } from '../../partials/partials.module';
import { ThemeModule } from '../../theme/theme.module';
import { PagesModule } from '../pages.module';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users/users.component';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
	declarations: [
		UsersComponent
	],
	exports: [
		UsersComponent
	],
	imports: [
		UsersRoutingModule,
		CommonModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatButtonModule,
		MatMenuModule,
		MatInputModule,
		MatTableModule,
		MatIconModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatSelectModule,
		PagesModule,
		SharedModule,
		PortletModule,
		NgbModule,
		PartialsModule,
		MatFormFieldModule,
		NgxMatIntlTelInputModule,
		ThemeModule,
		StoreModule.forFeature('auth', authReducer),
		TranslateModule.forChild(),
		EffectsModule.forFeature([AuthEffects]),
		NgxMaskModule.forRoot(),
		NgSelectModule
	],
	providers: []
})
export class UsersModule {
}