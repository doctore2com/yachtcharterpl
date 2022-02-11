import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';

@Component({   //bedzie pozniej dopisany caly ten komponent
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  cars: Array<any>;

  //powinno byc cars: Array<any>;  dałem jednak cars: Array<String>  = [];

//   makes: any[] = [];

//   constructor(private makeService: MakeService) {
//      // Initialization inside the constructor
//      this.makes = [];
//   }

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
    // powinno byc this.carService.getAll().subscribe(data => {   ja dałem jednak this.carService.getAll().subscribe((data: any) => {
     this.cars = data;
    });
  }
}

// export class CarListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }


