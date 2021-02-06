import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo1Component } from './trabajo1.component';

describe('Trabajo1Component', () => {
  let component: Trabajo1Component;
  let fixture: ComponentFixture<Trabajo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trabajo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trabajo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
