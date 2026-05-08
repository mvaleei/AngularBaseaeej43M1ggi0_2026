import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prelevare } from './prelevare';

describe('Prelevare', () => {
  let component: Prelevare;
  let fixture: ComponentFixture<Prelevare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prelevare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prelevare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
