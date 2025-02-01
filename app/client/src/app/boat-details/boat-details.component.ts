import { Component, OnInit } from '@angular/core';
import { Boat } from "../models/boat.model";
import { BoatService } from "../shared/boat/boat.service";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css']
})
export class BoatDetailsComponent implements OnInit {
  boat: Boat | null = null;
  error = '';

  constructor(
    private boatService: BoatService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBoat(id);
    }
  }

  loadBoat(id: string) {
    console.log('Próba załadowania łodzi o id:', id);
    this.boatService.get(id).subscribe({
      next: (data: Boat) => {
        console.log('Otrzymano dane łodzi:', data);
        this.boat = data;
      },
      error: (err) => {
        console.error('Błąd ładowania łodzi:', err);
        this.error = 'Błąd ładowania';
      }
    });
  }
}
