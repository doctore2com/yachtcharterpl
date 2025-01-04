import { Component, OnInit } from '@angular/core';
import {Boat} from "../shared/boat/boat.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BoatService} from "../shared/boat/boat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-boat-add',
  templateUrl: './boat-add.component.html',
  styleUrls: ['./boat-add.component.css']
})
export class BoatAddComponent implements OnInit {

  boatForm: FormGroup;

  constructor(private fb: FormBuilder, private boatService: BoatService, private router: Router) { }

  ngOnInit(): void {
  }

}
