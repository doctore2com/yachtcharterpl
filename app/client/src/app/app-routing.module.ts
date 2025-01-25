import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoatListComponent} from "./boat-list/boat-list.component";
import {BoatDetailsComponent} from "./boat-details/boat-details.component";
import {BoatAddComponent} from "./boat-add/boat-add.component";
import { CharterFormComponent } from './charter-form/charter-form.component';
import { CharterListComponent } from './charter-list/charter-list.component';
import { BoatEditComponent } from './boat-edit/boat-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'boats', pathMatch: 'full' },
  { path: 'boats', component: BoatListComponent },
  { path: 'boat-details/:id', component: BoatDetailsComponent },
  { path: 'boat-add', component: BoatAddComponent},
  { path: 'charter-form/:boatId', component: CharterFormComponent },
  { path: 'charters', component: CharterListComponent },
  { path: 'boat-edit/:id', component: BoatEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
