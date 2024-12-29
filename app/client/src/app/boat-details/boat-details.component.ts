import { Component, OnInit } from '@angular/core';
import {Boat} from "../shared/boat/boat.model";
import {BoatService} from "../shared/boat/boat.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css']
})
export class BoatDetailsComponent implements OnInit {
  boat: Boat | null = null;
  error = '';



  constructor(private boatService: BoatService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBoat(id);
    }
  }

  loadBoat(id: string) {
    this.boatService.get(id).subscribe({
      error: (err) => {
        this.error = 'Błąd ładowania';
      },
      next: (data: Boat) => {
        this.boat = data;
      }
    });
  }
  }
