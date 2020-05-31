import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMobileMenu: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickOutside(event: { value: boolean }) {
    if (event.value && this.showMobileMenu) {
      this.showMobileMenu = false;
    }
  }

  toggleMobileMenu(show: boolean) {
    setTimeout(() => this.showMobileMenu = show, 0);
  }
}
