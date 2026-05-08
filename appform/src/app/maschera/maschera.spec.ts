import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maschera } from './maschera';

describe('Maschera', () => {
  let component: Maschera;
  let fixture: ComponentFixture<Maschera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maschera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maschera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
