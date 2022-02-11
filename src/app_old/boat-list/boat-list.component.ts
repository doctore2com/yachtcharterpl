import { Component, OnInit } from '@angular/core';
import { BoatService } from '../shared/boat/boat.service';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {

 // boats: Array<any>;


 boats: Array<String> = [];


//   makes: any[] = [];
//
//   constructor(private makeService: MakeService) {
//      // Initialization inside the constructor
//      this.makes = [];
//   }

  constructor(private boatService: BoatService) { }

  ngOnInit() {
    this.boatService.getAll().subscribe((data: any)
    => {
     this.boats = data;
    });
  }
}

// export class BoatListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }


