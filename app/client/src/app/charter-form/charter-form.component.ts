import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharterService } from '../services/charter.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.css']
})
export class CharterFormComponent implements OnInit {
  charterForm: FormGroup;
  boatId: number;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private charterService: CharterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.boatId = 0;
    this.initForm();
  }

  private initForm() {
    this.charterForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      startCharter: [null, Validators.required],
      endCharter: [null, Validators.required],
      port: ['', Validators.required],
      userId: [1]
    });

    // Dodajemy nasłuchiwanie zmian w formularzu
    this.charterForm.valueChanges.subscribe(() => {
      console.log('Form valid:', this.charterForm.valid);
      console.log('Form value:', this.charterForm.value);
    });
  }

  ngOnInit(): void {
    const boatIdParam = this.route.snapshot.paramMap.get('boatId');
    if (boatIdParam) {
      this.boatId = Number(boatIdParam);
    } else {
      console.error('No boatId provided');
      this.snackBar.open('Błąd: Brak ID łodzi', 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.router.navigate(['/boats']);
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  onSubmit() {
    if (this.charterForm.valid) {
      const startDate = new Date(this.charterForm.value.startCharter);
      const endDate = new Date(this.charterForm.value.endCharter);

      // Ustawiamy godzinę na 12:00:00 dla obu dat
      startDate.setHours(12, 0, 0, 0);
      endDate.setHours(12, 0, 0, 0);

      const charterData = {
        name: this.charterForm.value.name,
        description: this.charterForm.value.description,
        startCharter: this.formatDate(startDate),
        endCharter: this.formatDate(endDate),
        port: this.charterForm.value.port,
        user: {
          id: this.charterForm.value.userId
        },
        boat: {
          id: this.boatId
        }
      };

      console.log('Sending charter data:', charterData);

      this.charterService.createCharter(charterData).subscribe({
        next: () => {
          this.snackBar.open('Rezerwacja została pomyślnie utworzona!', 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/charters']);
        },
        error: (error) => {
          console.error('Pełny błąd:', error);
          this.snackBar.open(
            `Wystąpił błąd podczas tworzenia rezerwacji: ${error.error?.message || error.message || 'Nieznany błąd'}`,
            'OK',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );
        }
      });
    } else {
      this.snackBar.open('Formularz zawiera błędy. Sprawdź wszystkie pola.', 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }


  compareDates(start: Date, end: Date): boolean {
    return start && end && start < end;
  }
}
