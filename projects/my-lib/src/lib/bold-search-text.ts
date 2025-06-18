import { Directive, ElementRef, inject, SimpleChanges, input } from '@angular/core';

@Directive({
  selector: '[libBoldSearchText]'
})
export class BoldSearchText {
  readonly searchText = input<string>(undefined, { alias: "libBoldSearchText" });

  private readonly el = inject(ElementRef);

  ngOnChanges(change: SimpleChanges) {
    const content = this.el.nativeElement.innerText;
    if (!content || !this.searchText()) return;
    const highlightedContent = content.replace(
      new RegExp(change['searchText'].currentValue, 'gi'),
      (match: string) => `<strong>${match}</strong>`
    );
    this.el.nativeElement.innerHTML = highlightedContent;
  }
}
