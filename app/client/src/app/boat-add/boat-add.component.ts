import { Component, OnInit } from '@angular/core';
import { Boat } from "../models/boat.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BoatService } from "../shared/boat/boat.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-boat-add',
  templateUrl: './boat-add.component.html',
  styleUrls: ['./boat-add.component.css']
})
export class BoatAddComponent implements OnInit {

  boatForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private boatService: BoatService, private router: Router) {
    this.boatForm = this.fb.group({
      boatName: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: [''],
      landlord: [''],
      placesInside: [0, [Validators.required, Validators.min(0)]],
      cabins: [0, [Validators.required, Validators.min(0)]],
      bunk: [0, [Validators.required, Validators.min(0)]],
      priceInTheSeason: [0, [Validators.required, Validators.min(0)]],
      priceOutOfSeason: [0, [Validators.required, Validators.min(0)]],
      year: [2024, [Validators.required, Validators.min(1900)]],
      power: [0, [Validators.required, Validators.min(0)]],
      distance: [0, [Validators.required, Validators.min(0)]],
      imageSource: ['/assets/sasanka.jpg'],
      opinions: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.boatForm.valid) {
      const boatData: Boat = {
        ...this.boatForm.value,
        id: 0
      };
      console.log('Dane łodzi do wysłania:', boatData);

      this.boatService.save(boatData).subscribe({
        next: () => {
          console.log("Lodz zostala dodana pomyslnie");
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error("Blad podczas dodawania lodzi", error);
        }
      });
    } else {
      console.log('Formularz jest nieprawidlowy');
      Object.keys(this.boatForm.controls).forEach(key => {
        const control = this.boatForm.get(key);
        if (control?.invalid) {
          console.log(`Pole ${key} jest nieprawidlowe:`, control.errors);
        }
      });
    }
  }
}
