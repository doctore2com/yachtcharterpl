import { Component, OnInit } from '@angular/core';
import { CharterService } from '../services/charter.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Charter } from '../models/charter.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-charter-list',
  templateUrl: './charter-list.component.html',
  styleUrls: ['./charter-list.component.css']
})
export class CharterListComponent implements OnInit {
  charters: Charter[] = [];
  loading = false;
  error = '';
  noCharters: boolean = false;

  constructor(
    private charterService: CharterService,
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.loading = true;
    const userId = this.authService.getUserId();

    this.charterService.getChartersByUserId(userId).subscribe({
      next: (charters) => {
        this.charters = charters;
        this.noCharters = charters.length === 0;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Nie udało się załadować rezerwacji';
        this.loading = false;
      }
    });
  }
}
