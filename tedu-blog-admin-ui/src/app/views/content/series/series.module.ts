import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    SeriesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeriesModule { }
