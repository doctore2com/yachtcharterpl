import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.css']
})
export class CharterFormComponent implements OnInit {

  charterForm: FormGoup;
  boatId: number;


  constructor(
    private fb: FormBuilder,
    private route: ActiveRoute,
    private router: Router,
    private charterService: CharterService
    #TODO
  ) { }

  ngOnInit(): void {
    this.boatId = Number(this.router.snapshot.paramMap.get('boatID')); // to moze byc zle
  }

}
