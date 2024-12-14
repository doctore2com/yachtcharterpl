import { Component, OnInit } from '@angular/core';
import {Boat} from "../shared/boat/boat.model";
import {BoatService} from "../shared/boat/boat.service";


@Component({
  selector: 'app-boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css']
})
export class BoatDetailsComponent implements OnInit {
  boat: Boat[] = [];
  error = '';


  constructor(private boatService: BoatService) {
  }

  ngOnInit() {
    this.loadBoat();
  }

  loadBoat() {
    this.boatService.getAll().subscribe({
        next: (data) => {
          this.boat = data;
        },
        error: (err) => {
          this.error = 'Błąd ładowania';
        }
      }
    )
  }
}
//
//   set id(value: number) {
//     this._id = value;
//   }
//
//   boat: Boat[]=[];
//   error='';
//   private _id: number;
//
//   constructor(private boatService: BoatService) {
//
//   }}
  //
  // ngOnInit(): void {
  // this.loadBoat();
  // }
  //
  // loadBoat(id: string){
  //   this.boatService.get(id).subscribe({
  //     next:(data)=>{
  //       this.boat = data;
  //     },
  //     error:(err)=>{
  //       this.error = 'Błąd ładowania';
  //   }
  // })

// }
// }
