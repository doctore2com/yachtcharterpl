import { Component, OnInit } from '@angular/core';
import { BoatService } from '../shared/boat/boat.service';
import { Boat } from '../shared/boat/boat.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})

export class BoatListComponent implements OnInit {
  boats: Boat[]=[];
  error= '';


  constructor(
    private boatService: BoatService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    console.log('Inicjalizacja BoatListComponent');
    this.loadBoats();
  }

  loadBoats(){
    this.boatService.getAll().subscribe({
      next:(data)=>{
        console.log('Otrzymane dane:', data);
        this.boats = data;
      }
      ,
      error:(err)=>{
        this.error = 'Błąd ładowania';
      }
    })
  }
  //   this.boatService.getAll().subscribe(data => {
  // console.log('lodki',data)
  //     console.log('lodka',data[0].imageSource)
  // this.boats = data;

  deleteBoat(id: number) {
    if (confirm('Czy na pewno chcesz usunąć ten jacht?')) {
      // @ts-ignore
      this.boatService.deleteBoat(id).subscribe({
        next: () => {
          this.boats = this.boats.filter(boat => boat.id !== id);
          this.snackBar.open('Jacht został usunięty', 'OK', { duration: 3000 });
        },
        error: (error) => {
          this.snackBar.open('Błąd podczas usuwania jachtu', 'OK', { duration: 3000 });
        }
      });
    }
  }
}
