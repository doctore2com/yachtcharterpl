import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';
import { Boat } from '../models/boat.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar,
    public authService: AuthService,
    private router: Router
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

  updateBoat(id: number) {
    this.router.navigate(['/boats', id, 'edit']);
  }

  deleteBoat(id: number) {
    if (confirm('Czy na pewno chcesz usunąć ten jacht?')) {
      this.boatService.deleteBoat(id).subscribe({
        next: () => {
          this.snackBar.open('Jacht został usunięty', 'OK', { duration: 3000 });
          this.loadBoats(); // Odśwież listę po usunięciu
        },
        error: (error) => {
          console.error('Błąd podczas usuwania łodzi:', error);
          this.snackBar.open('Błąd podczas usuwania jachtu', 'OK', { duration: 3000 });
        }
      });
    }
  }

  isAdmin(): boolean {
    const user = this.authService.getUser();
    return !!(user && user.roles && user.roles.includes('ROLE_ADMIN'));
  }

  isModerator(): boolean {
    const user = this.authService.getUser();
    return !!(user && user.roles && user.roles.includes('ROLE_MODERATOR'));
  }

  isSailor(): boolean {
    const user = this.authService.getUser();
    return !!(user && user.roles && user.roles.includes('ROLE_SAILOR'));
  }

  canModifyBoat(boat: Boat): boolean {
    return !!(this.isAdmin() || this.isModerator());
  }

}
