import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterListComponent } from './charter-list.component';

describe('CharterListComponent', () => {
  let component: CharterListComponent;
  let fixture: ComponentFixture<CharterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
