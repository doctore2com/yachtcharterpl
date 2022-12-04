import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: any;
  model: any = {};

  constructor(private userService: UserService) {
  }




  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  registerUser() {
    console.log(this.model.username)
    console.log(this.model.email)
    console.log(this.model.password)
    this.userService.registerUser(this.model.username, this.model.email, this.model.password).subscribe(
      data => {
        console.log("response received")
      },
      error => {
        console.log("exception occured")
      });
  }

    // 1 dodajesz plik user.model.ts i tworzysz go na podstawie encji z bazy danych (java) z zachowaniem typow
    // ze zmiennej model pobierac po kluczu wartosci i przypisywac je do obiektu
    // bedziesz mial wtedy obiekt user (zmienic trzeba sygnature w serwisie na UserModel zamiast any

    //2 implementacje z serwisu przenosisz do komponentu
    //  { name : this.model.name

    //  this.userService.save(user).subscribe(data => {
 //   console.log(data);
    //przekierowanie
    // })
  }



