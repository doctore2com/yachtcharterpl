import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BoatService } from './shared/boat/boat.service';
import { HttpClientModule } from '@angular/common/http';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BoatEditComponent } from './boat-edit/boat-edit.component';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {LoginListComponent} from "./login-list/login-list.component";
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { CharterFormComponent } from './charter-form/charter-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/boat-list', pathMatch: 'full' },
  {
    path: 'boat-list',
    component: BoatListComponent
  },
  {
    path: 'boat-add',
    component: BoatEditComponent
  },
  {
    path: 'boat-edit/:id',
    component: BoatEditComponent
  },
  {
    path: 'registration',
    component: UserListComponent
  },
  {
    path: 'login',
    component: LoginListComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BoatListComponent,
    BoatEditComponent,
    UserListComponent,
    LoginListComponent,
    BoatDetailsComponent,
    CharterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        FormsModule,
            RouterModule.forRoot(appRoutes)
  ],
  providers: [BoatService],
  bootstrap: [AppComponent]
})

export class AppModule { }
