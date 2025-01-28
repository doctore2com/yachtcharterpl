import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharterService } from '../services/charter.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Charter } from '../models/charter.model';

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
      const startDate = this.charterForm.get('startCharter')?.value;
      const endDate = this.charterForm.get('endCharter')?.value;

      console.log('Daty przed formatowaniem:', { startDate, endDate });

      const charter: Charter = {
        boat: {
          id: this.boatId
        },
        user: {
          id: 1
        },
        name: this.charterForm.get('name')?.value,
        description: this.charterForm.get('description')?.value || '',
        startCharter: this.formatDateToString(startDate),
        endCharter: this.formatDateToString(endDate),
        port: this.charterForm.get('port')?.value
      };

      console.log('Obiekt Charter do wysłania:', charter);

      this.charterService.createCharter(charter).subscribe({
        next: (response) => {
          console.log('Sukces:', response);
          this.snackBar.open('Rezerwacja została utworzona!', 'OK', {
            duration: 3000
          });
          this.router.navigate(['/charters']);
        },
        error: (error) => {
          console.error('Błąd:', error);
          let errorMessage = 'Wystąpił błąd podczas tworzenia rezerwacji';
          if (error.error?.message) {
            errorMessage += ': ' + error.error.message;
          }
          this.snackBar.open(errorMessage, 'OK', { duration: 5000 });
        }
      });
    } else {
      this.snackBar.open('Formularz zawiera błędy. Sprawdź wszystkie pola.', 'OK', {
        duration: 3000
      });
    }
  }

  private formatDateToString(date: Date): string {
    if (!date) return '';
    // Konwertujemy string na obiekt Date jeśli to konieczne
    const d = typeof date === 'string' ? new Date(date) : date;

    // Formatujemy datę do wymaganego formatu
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    // Zwracamy datę w formacie YYYY-MM-DD HH:mm:ss
    return `${year}-${month}-${day} 12:00:00`;
  }

  compareDates(start: Date, end: Date): boolean {
    return start && end && start < end;
  }
}
