import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginListComponent} from "./login-list/login-list.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path: '', component: LoginListComponent},
    {path:'registration', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
