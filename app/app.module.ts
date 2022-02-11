import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarService } from './shared/car/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';  // bylo /shared/car/car-list/car-list.component

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule } from '@angular/material';  //dodałem to do material angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';         // dodalem to do material angular
import { MaterialModule } from './material.module';     // dodalem to do angular material
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';  //dodalem to do angular material
import { GiphyService } from './shared/giphy/giphy.service';   // dodalem giphy do listy


@NgModule({
  declarations: [
    AppComponent
    CarListComponent  //bylo to zakomentowane
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
        MatButtonModule
  ],
  providers: [CarService, GiphyService],    //dodalem giphy
  bootstrap: [AppComponent]
})

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
