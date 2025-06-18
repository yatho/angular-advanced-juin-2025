import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterCpt } from './toaster-cpt';

describe('ToasterCpt', () => {
  let component: ToasterCpt;
  let fixture: ComponentFixture<ToasterCpt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterCpt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterCpt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
