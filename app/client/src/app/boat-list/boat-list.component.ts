import { Component, OnInit } from '@angular/core';
import { BoatService } from '../shared/boat/boat.service';
import { Boat } from '../shared/boat/boat.model';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})

export class BoatListComponent implements OnInit {
  boats: Boat[]=[];
  error= '';


  constructor(private boatService: BoatService) {
  }

  ngOnInit() {
    this.loadBoats();
  }

    loadBoats(){
      this.boatService.getAll().subscribe({
        next:(data)=>{
          this.boats = data;
        },
        error:(err)=>{
          this.error = 'Błąd ładowania';
        }
      })
    }
      //   this.boatService.getAll().subscribe(data => {
      // console.log('lodki',data)
      //     console.log('lodka',data[0].imageSource)
      // this.boats = data;

  }
