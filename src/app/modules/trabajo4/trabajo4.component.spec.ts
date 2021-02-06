import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo4Component } from './trabajo4.component';

describe('Trabajo4Component', () => {
  let component: Trabajo4Component;
  let fixture: ComponentFixture<Trabajo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trabajo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trabajo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
