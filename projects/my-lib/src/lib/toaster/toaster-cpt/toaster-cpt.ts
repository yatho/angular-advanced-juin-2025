import { Component, inject } from '@angular/core';
import { TOAST_DATA } from '../toaster';
import { MatCard } from '@angular/material/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-toaster-cpt',
  imports: [MatCard, NgTemplateOutlet],
  templateUrl: './toaster-cpt.html',
  styleUrl: './toaster-cpt.css'
})
export class ToasterCpt {
  protected readonly data = inject(TOAST_DATA);
}
