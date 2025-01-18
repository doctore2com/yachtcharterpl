import { Component, OnInit } from '@angular/core';
import {CharterService} from "../services/charter.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.css']
})
export class CharterFormComponent implements OnInit {

  charterForm: FormGroup;
  boatId: number;
  error: string = ''


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private charterService: CharterService
  ) {
    this.charterForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      port: ['', Validators.required],
      boatId: ['']
    })

  }

  ngOnInit(): void {
    const boatIdParam = this.route.snapshot.paramMap.get('boatId');
    console.log('Boat ID from route:', boatIdParam);
    if (boatIdParam) {
      this.boatId = Number(boatIdParam);
      this.charterForm.patchValue({
        boatId: this.boatId
      });
    } else {
      console.error('No boatId provided in route');
      this.error = 'Brak ID łodzi';
    }
  }

  onSubmit() {
    if (this.charterForm.valid) {
      const charterData = {
        ...this.charterForm.value,
        id: 0,
        usrId: 1,
        startDate: this.charterForm.value.startDate,
        endDate: this.charterForm.value.endDate,
        name: this.charterForm.value.name,
        description: this.charterForm.value.description,
        port: this.charterForm.value.port
      }

      // @ts-ignore
      this.charterService.createCharter(charterData).subscribe({
        next: () => {
          console.log('Charter created successfully');
          this.router.navigate(['/boats'])
        },
        error: (error) => {
          console.error('Blad w tworzeniu charteru:', error);
          this.error = 'Wystapil blad podczas tworzenia rezerwacji';
        }
      });
    }else{
      console.log('Formularz jest bledny', this.charterForm.errors);
      this.error = 'Formularz zawiera bledy';
    }
  }
}
