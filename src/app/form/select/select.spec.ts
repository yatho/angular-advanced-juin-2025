import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select } from './select';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Select', () => {
  let component: Select;
  let fixture: ComponentFixture<Select>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Select],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Select);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
