import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Versare } from './versare';

describe('Versare', () => {
  let component: Versare;
  let fixture: ComponentFixture<Versare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Versare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Versare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
