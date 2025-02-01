import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { CharterFormComponent } from './charter-form/charter-form.component';
import { BoatAddComponent } from './boat-add/boat-add.component';
import { LoginComponent } from './login/login.component';
import { CharterListComponent } from './charter-list/charter-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/boats', pathMatch: 'full' },
  { path: 'boats', component: BoatListComponent },
  { path: 'boats/:id', component: BoatDetailsComponent },
  { path: 'boat-add', component: BoatAddComponent },
  { path: 'charter-form/:id', component: CharterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'charters', component: CharterListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
