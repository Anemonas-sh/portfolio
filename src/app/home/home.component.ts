import {Component, ElementRef, OnInit} from '@angular/core';
import {ContactService} from '../shared/contact.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  isLoading = false;

  constructor(private contactService: ContactService) {  }

  makeRequest(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.contactService.requestContact(contactForm.value).subscribe(
      res => {
        alert('Requisição de contato enviada. Aguarde um retorno!');
      },
      err => {
        alert('Algo deu errado, tente novamente mais tarde!');
      },
      () => {
        contactForm.resetForm();
        this.isLoading = false;
      }
    );
  }

}
