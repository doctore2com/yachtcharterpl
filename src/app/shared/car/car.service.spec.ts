import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
// import { Injectable } from '@angular/core';  //dodalem wg polskiego tutoriulo
// import { HttpClient } from '@angular/common/http';    //dodalem wg polskiego tutoriulo
// import { Observable } from 'rxjs/Observable';     //dodalem wg polskiego tutoriulo

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
