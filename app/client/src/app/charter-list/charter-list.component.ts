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
  error: string = '';
  noCharters: boolean = false;
  loading: boolean = false;

  constructor(
    private charterService: CharterService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadCharters();
  }

  loadCharters(): void {
    this.loading = true;
    this.charterService.getAllCharters().subscribe({
      next: (data) => {
        this.charters = data;
        this.noCharters = data.length === 0;
        this.loading = false;
      },
      error: (err) => {
        console.error('Błąd podczas pobierania rezerwacji:', err);
        this.error = 'Nie udało się załadować listy rezerwacji';
        this.loading = false;
      }
    });
  }
}
