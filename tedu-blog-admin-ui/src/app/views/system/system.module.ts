import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { SystemComponent } from './system.component';
import { RolesDetailComponent } from './role-detail/role-detail.component';
import { TeduSharedModule } from 'src/app/shared/modules/tedu-shared.module';
 
@NgModule({
  imports: [
    SystemRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    BlockUIModule,
    PaginatorModule,
    PanelModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    TeduSharedModule
  ],
  declarations: [SystemComponent, UsersComponent, RoleComponent, RolesDetailComponent]
})
export class SystemModule {
}
