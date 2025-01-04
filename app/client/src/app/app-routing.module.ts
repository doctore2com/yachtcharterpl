import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginListComponent} from "./login-list/login-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {BoatListComponent} from "./boat-list/boat-list.component";
import {BoatDetailsComponent} from "./boat-details/boat-details.component";
import {BoatAddComponent} from "./boat-add/boat-add.component";

const routes: Routes = [
  { path: '', redirectTo: 'boats', pathMatch: 'full' },
  { path: 'boats', component: BoatListComponent },
  { path: 'boat-details/:id', component: BoatDetailsComponent },
  { path: 'boat-add', component: BoatAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
