import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { BoatEditComponent } from './boat-edit/boat-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginListComponent } from './login-list/login-list.component';
import { BoatService } from './shared/boat/boat.service';
import { BoatAddComponent } from './boat-add/boat-add.component';
import { CharterFormComponent } from './charter-form/charter-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharterService } from './services/charter.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CharterListComponent } from './charter-list/charter-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BoatListComponent,
    CharterFormComponent,
    BoatDetailsComponent,
    BoatEditComponent,
    UserListComponent,
    LoginListComponent,
    BoatAddComponent,
    CharterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [BoatService, CharterService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
