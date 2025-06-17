import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Address } from './address';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Address', () => {
  let component: Address;
  let fixture: ComponentFixture<Address>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Address],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Address);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
