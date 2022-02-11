import { Component, OnInit } from '@angular/core';
import { Observable        } from 'rxjs/Observable';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 //cars: Array<String>  = [];   tak bylo

 cars: Array<any>;


 //makes: any[] = [];

//   constructor(private makeService: MakeService) {
//      // Initialization inside the constructor
//      this.makes = [];
//   }

  constructor(private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
 //    this.carService.getAll().subscribe((data: any) => {  bylo
     this.cars = data;
     for (const car of this.cars) {
            this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
             }    //sprawdzic te klamry, bo cos nie pasuja razem z kodem
    });
  }
}

// export class CarListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }


