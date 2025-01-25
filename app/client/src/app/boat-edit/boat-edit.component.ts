import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatService } from '../shared/boat/boat.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-edit',
  templateUrl: './boat-edit.component.html',
  styleUrls: ['./boat-edit.component.css']
})
export class BoatEditComponent implements OnInit {
  boatForm: FormGroup;
  boatId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private boatService: BoatService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  private initForm() {
    this.boatForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      manufacturer: ['', Validators.required],
      placesInside: ['', Validators.required],
      priceInTheSeason: ['', Validators.required],
      priceOutOfSeason: [''],
      year: [''],
      power: [''],
      distance: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.boatId = +id;
      this.loadBoatData();
    }
  }

  loadBoatData() {
    this.boatService.get(this.boatId.toString()).subscribe({
      next: (boat) => {
        this.boatForm.patchValue({
          name: boat.name,
          description: boat.description,
          manufacturer: boat.manufacturer,
          placesInside: boat.placesInside,
          priceInTheSeason: boat.priceInTheSeason,
          priceOutOfSeason: boat.priceOutOfSeason,
          year: boat.year,
          power: boat.power,
          distance: boat.distance
        });
      },
      error: (error) => {
        console.error('Błąd podczas ładowania danych łodzi:', error);
        this.snackBar.open('Błąd podczas ładowania danych łodzi', 'OK', { duration: 3000 });
      }
    });
  }

  onSubmit() {
    if (this.boatForm.valid) {
      this.boatService.updateBoat(this.boatId, this.boatForm.value).subscribe({
        next: () => {
          this.snackBar.open('Łódź została zaktualizowana', 'OK', { duration: 3000 });
          this.router.navigate(['/boats']);
        },
        error: (error) => {
          console.error('Błąd podczas aktualizacji łodzi:', error);
          this.snackBar.open('Błąd podczas aktualizacji łodzi', 'OK', { duration: 3000 });
        }
      });
    }
  }
}
