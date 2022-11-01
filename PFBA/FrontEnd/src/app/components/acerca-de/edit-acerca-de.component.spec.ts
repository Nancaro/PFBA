import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcercaDeComponent } from './edit-acerca-de.component';

describe('EditAcercaDeComponent', () => {
  let component: EditAcercaDeComponent;
  let fixture: ComponentFixture<EditAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
