import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatService } from '../services/boat.service';
import { Boat } from '../models/boat.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-edit',
  templateUrl: './boat-edit.component.html',
  styleUrls: ['./boat-edit.component.css']
})
export class BoatEditComponent implements OnInit {
  boat: Boat = {
    boatName: '',
    description: '',
    landlord: '',
    manufacturer: '',
    imageSource: '',
    placesInside: 0,
    cabins: 0,
    bunk: 0,
    priceInTheSeason: 0,
    priceOutOfSeason: 0,
    year: 0,
    power: 0,
    distance: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boatService: BoatService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadBoat(id);
    }
  }

  loadBoat(id: number): void {
    this.boatService.getBoat(id).subscribe({
      next: (data) => {
        console.log('Załadowano dane łodzi:', data);
        this.boat = data;
      },
      error: (error) => {
        console.error('Błąd podczas ładowania łodzi:', error);
        this.snackBar.open('Nie udało się załadować danych łodzi', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/boats']);
      }
    });
  }

  onSubmit(): void {
    if (this.boat.id) {
      this.boatService.updateBoat(this.boat.id, this.boat).subscribe({
        next: () => {
          this.snackBar.open('Łódź została zaktualizowana', 'OK', {
            duration: 3000
          });
          this.router.navigate(['/boats']);
        },
        error: (error) => {
          console.error('Błąd podczas aktualizacji łodzi:', error);
          this.snackBar.open('Nie udało się zaktualizować łodzi', 'OK', {
            duration: 3000
          });
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/boats']);
  }
}
