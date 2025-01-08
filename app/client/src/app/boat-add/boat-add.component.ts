import { Component, OnInit } from '@angular/core';
import {Boat} from "../shared/boat/boat.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BoatService} from "../shared/boat/boat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-boat-add',
  templateUrl: './boat-add.component.html',
  styleUrls: ['./boat-add.component.css']
})
export class BoatAddComponent implements OnInit {

  boatForm: FormGroup;
  selectedFile: File | null = null;


  constructor(private fb: FormBuilder, private boatService: BoatService, private router: Router) {
      // this.boatForm  =  this.fb.group({
      //     name: ['', Validators.required],
      //     #TODO!
      //
      //
      // });
  }

  ngOnInit(): void {
  }

  // onFileSelected(event: any){
  //
  // }
  //

  onSubmit(){
    if (this.boatForm.valid){
      const boatData = {
        ...this.boatForm.value, imageSource: this.previewUrl || '/assets/sasanka.jpg'
      };

      this.boatService.save(boatData).subscribe({
        next: () => {
          console.log("Lodz zostala dodana pomyslnie")
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error("Blad podczas dodawania lodzi", error)
        }
      })
    } else {
        console.log('Formularz jest nieprawidlowy');
        Object.keys(this.boatForm.controls).forEach(key => {
          const control = this.boatForm.get(key);
          if (control?.invalid){
            console.log(`Pole ${key} jest nieprawidlowe:`, control.errors); //control.log
          }
        })
    }
  }
}











