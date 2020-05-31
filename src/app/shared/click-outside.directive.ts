import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  private globalClick: Subscription;

  @Output()
  clickOutside: EventEmitter<any>;

  constructor(private elRef: ElementRef) {
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    this.globalClick = fromEvent(window, 'mousedown')
      .pipe(delay(1))
      .subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }

  onGlobalClick(event: MouseEvent) {
    if (event instanceof MouseEvent && event.button === 0 || event instanceof FocusEvent) {
      if (this.elRef.nativeElement.contains(event.target)) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }
}
