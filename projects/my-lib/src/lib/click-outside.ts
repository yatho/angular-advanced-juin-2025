import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[libClickOutside]'
})
export class ClickOutside {
  @Output()
  libClickOutside = new EventEmitter<void>();

  private readonly el = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}
