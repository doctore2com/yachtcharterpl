import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterFormComponent } from './charter-form.component';

describe('CharterFormComponent', () => {
  let component: CharterFormComponent;
  let fixture: ComponentFixture<CharterFormComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
