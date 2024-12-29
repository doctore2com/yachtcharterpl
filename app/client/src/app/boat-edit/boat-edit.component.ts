import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatService } from '../shared/boat/boat.service';
import { NgForm } from '@angular/forms';
import {Boat} from "../shared/boat/boat.model";

@Component({
  selector: 'app-boat-edit',
  templateUrl: './boat-edit.component.html',
  styleUrls: ['./boat-edit.component.css']
})
export class BoatEditComponent implements OnInit, OnDestroy {

boat: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private boatService: BoatService)
                                           {
  }


  ngOnInit() {
                this.sub = this.route.params.subscribe(params => {
                  const id = params['id'];
                  if (id) {
                    this.boatService.get(id).subscribe((boat: any) => {
                      if (boat) {
                        this.boat = boat;
                        this.boat.href = boat._links.self.href;
                        } else {
                        console.log(`Boat with id '${id}' not found, returning to list`);
                        this.gotoList();
                      }
                    });
                  }
                });
              }

ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/boat-list']);
  }

  save(form: NgForm) {
    if (form.valid) {
      const boatData: Boat = {
        ...this.boat,
        ...form.value
      };

      this.boatService.save(boatData).subscribe(result => {
        this.router.navigate(['/boats']);
      });
    }
  }

  remove(href) {
    this.boatService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}






