import { Component, OnInit } from '@angular/core';
import { CharterService } from '../services/charter.service';
import { Charter } from '../models/charter.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-charter-list',
  templateUrl: './charter-list.component.html',
  styleUrls: ['./charter-list.component.css']
})
export class CharterListComponent implements OnInit {
  charters: Charter[] = [];
  loading = true;
  error = false;

  constructor(
    private charterService: CharterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCharters();
  }

  loadCharters() {
    this.loading = true;
    this.error = false;

    this.charterService.getAllCharters().subscribe({
      next: (data) => {
        console.log('Otrzymane dane:', data);
        this.charters = Array.isArray(data) ? data : [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Błąd podczas ładowania rezerwacji:', error);
        this.error = true;
        this.loading = false;
        this.charters = [];
        this.snackBar.open('Błąd podczas ładowania rezerwacji', 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}
