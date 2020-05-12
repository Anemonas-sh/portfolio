import { Component, OnInit } from '@angular/core';
import {ContactService} from '../shared/contact.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  makeRequest(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }
    contactForm.resetForm();
    this.contactService.requestContact(contactForm.value).subscribe(
      res => {
        alert('tudo certo!');
      }
    );
  }

}
