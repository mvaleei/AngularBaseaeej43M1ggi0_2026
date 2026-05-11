import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contabilita } from './contabilita';

describe('Contabilita', () => {
  let component: Contabilita;
  let fixture: ComponentFixture<Contabilita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contabilita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contabilita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
