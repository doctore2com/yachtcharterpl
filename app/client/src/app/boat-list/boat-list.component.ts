import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';
import { Boat } from '../models/boat.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})

export class BoatListComponent implements OnInit {
  boats: Boat[] = [];
  error: string = '';

  constructor(
    private boatService: BoatService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    console.log('Inicjalizacja BoatListComponent');
    this.loadBoats();
  }

  loadBoats(): void {
    this.boatService.getBoats().subscribe({
      next: (boats) => {
        console.log('Otrzymane łodzie:', boats);
        this.boats = boats;
      },
      error: (error) => {
        console.error('Błąd podczas pobierania łodzi:', error);
      }
    });
  }

  deleteBoat(id: number) {
    if (confirm('Czy na pewno chcesz usunąć ten jacht?')) {
      // @ts-ignore
      this.boatService.deleteBoat(id).subscribe({
        next: () => {
          this.boats = this.boats.filter(boat => boat.id !== id);
          this.snackBar.open('Jacht został usunięty', 'OK', { duration: 3000 });
        },
        error: (error) => {
          console.error("Błąd podczas usuwania łodzi", error);
          this.snackBar.open('Błąd podczas usuwania jachtu', 'OK', { duration: 3000 });
        }
      });
    }
  }
}
