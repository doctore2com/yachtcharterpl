 import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})

export class LoginListComponent implements OnInit {


  msg='';
  model: any = {};
  constructor(private service : UserService, private router : Router){  }

  ngOnInit() {
  }

  loginUser() {
    this.service.loginUserFromRemote(this.model.email,this.model.password).subscribe(
    data => {
      console.log("response received")
    },
      error => {
        console.log("exception occured")
      this.msg="Bad credentials, please enter valid email and password";
    });
}

  // gotoregistration(){
  //   this.router.navigate(['/registration'])
  // }

}



