import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BoatService } from './shared/boat/boat.service';
import { HttpClientModule } from '@angular/common/http';
import { BoatListComponent } from './boat-list/boat-list.component';  // bylo /shared/boat/boat-list/boat-list.component

@NgModule({
  declarations: [
    AppComponent,
    BoatListComponent // bylo
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BoatService],
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
