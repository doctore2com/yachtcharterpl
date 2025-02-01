import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharterService } from '../services/charter.service';
import { BoatService } from '../services/boat.service';
import { AuthService } from '../services/auth.service';
import { Charter } from '../models/charter.model';
import { Boat } from '../models/boat.model';
import { CharterUser } from '../models/charter-user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.css']
})
export class CharterFormComponent implements OnInit {
  charterForm: FormGroup;
  boat: Boat | null = null;
  today = new Date();
  error: string | null = null;
  boatId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private charterService: CharterService,
    private boatService: BoatService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.charterForm = this.fb.group({
      charterName: ['', Validators.required],
      description: [''],
      startCharter: ['', Validators.required],
      endCharter: ['', Validators.required],
      port: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.boatId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.boatId) {
      this.boatService.getBoat(this.boatId).subscribe({
        next: (boat) => {
          this.boat = boat;
        },
        error: (error) => {
          console.error('Error loading boat:', error);
          this.snackBar.open('Error loading boat details', 'OK', { duration: 3000 });
        }
      });
    }
  }

  onSubmit(): void {
    console.log('Czy użytkownik jest zalogowany:', this.authService.isLoggedIn());
    console.log('Aktualny użytkownik:', this.authService.getUser());

    if (this.charterForm.valid && this.boat) {
      const currentUser = this.authService.getUser();
      if (!currentUser) {
        this.snackBar.open('Musisz być zalogowany, aby utworzyć rezerwację', 'OK', { duration: 3000 });
        return;
      }

      const charter: Charter = {
        charterName: this.charterForm.value.charterName,
        description: this.charterForm.value.description,
        startCharter: this.charterForm.value.startCharter,
        endCharter: this.charterForm.value.endCharter,
        port: this.charterForm.value.port,
        boat: this.boat,
        user: {
          id: currentUser.id,
          username: currentUser.username,
          email: currentUser.email
        }
      };

      this.charterService.createCharter(charter).subscribe({
        next: (response) => {
          console.log('Rezerwacja utworzona:', response);
          this.snackBar.open('Rezerwacja została utworzona pomyślnie', 'OK', {
            duration: 3000
          });
          this.router.navigate(['/charters']);
        },
        error: (error) => {
          console.error('Błąd podczas tworzenia rezerwacji:', error);
          this.snackBar.open('Błąd podczas tworzenia rezerwacji', 'OK', {
            duration: 3000
          });
        }
      });
    }
  }

  compareDates(start: Date, end: Date): boolean {
    return start && end && start < end;
  }
}
