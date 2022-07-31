import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweducacionComponent } from './neweducacion.component';

describe('NeweducacionComponent', () => {
  let component: NeweducacionComponent;
  let fixture: ComponentFixture<NeweducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeweducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeweducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
