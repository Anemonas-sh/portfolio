import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor(private el: ElementRef) {}

  getWrapperHeight() {
    const items = this.el.nativeElement.querySelectorAll('.carousel__item');
    let maxItem = 0;
    for (const item of items) {
      if (item.clientHeight > maxItem) {
        maxItem = item.clientHeight;
      }
    }
    return maxItem + 'px';
  }
}
