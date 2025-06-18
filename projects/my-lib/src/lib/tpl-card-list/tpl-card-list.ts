import { Component, TemplateRef, contentChild, input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-tpl-card-list',
  imports: [MatCard, NgTemplateOutlet],
  templateUrl: './tpl-card-list.html',
  styleUrl: './tpl-card-list.css'
})
export class TplCardList<T> {
  readonly list = input.required<T[]>();
  readonly title = input.required<string>();

  rowTemplate = contentChild<TemplateRef<{ $implicit: T }>>('rowRef');
}
