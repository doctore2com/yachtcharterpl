import { Component, OnInit } from '@angular/core';
import { BoatService } from '../shared/boat/boat.service';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})

export class BoatListComponent implements OnInit {

  boats: any;

  constructor(private boatService: BoatService) {
  }

  ngOnInit() {
        this.boatService.getAll().subscribe(data => {
      console.log('lodki',data)
          console.log('lodka',data[0].imageSource)
      this.boats = data;
    });
  }

}

