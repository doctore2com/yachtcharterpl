import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isLoading = false;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData: AuthService = {
        ...this.registerForm.value,
        id: 0
      };
      console.log('Dane rejestracji do wyslania:', registerData);
      this.userService.save(this.userService);
      this.router.navigate(['/login']);


    }}}
//       {
//         next: () => {
//           console.log("Uzytkownik został zarejestrowany pomyslnie");
//           this.router.navigate(['/login']);
//         },
//         error: (error) => {
//           console.error("Blad podczas dodawania użytkownika", error);
//         }
//       });
//   } else {
//   console.log('Formularz jest nieprawidlowy');
//   Object.keys(this.registerForm.controls).forEach(key => {
//   const control = this.registerForm.get(key);
//   if (control?.invalid) {
//   console.log(`Pole ${key} jest nieprawidlowe:`, control.errors);
// }}}
