import { Directive, ElementRef, inject, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[libBoldSearchText]'
})
export class BoldSearchText {
  @Input('libBoldSearchText')
  searchText?: string;

  private readonly el = inject(ElementRef);

  ngOnChanges(change: SimpleChanges) {
    const content = this.el.nativeElement.innerText;
    if (!content || !this.searchText) return;
    const highlightedContent = content.replace(
      new RegExp(change['searchText'].currentValue, 'gi'),
      (match: string) => `<strong>${match}</strong>`
    );
    this.el.nativeElement.innerHTML = highlightedContent;
  }
}
