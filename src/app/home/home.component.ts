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
  alertTitle: string;
  alertMessage: string;
  alertVisibility = false;

  constructor(private contactService: ContactService) {  }

  makeRequest(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.contactService.requestContact(contactForm.value).subscribe(
      res => {
        this.alertTitle = 'Sucesso';
        this.alertMessage = 'Requisição de contato enviada com sucesso. Obrigado e aguarde, entraremos em contato!';
      },
      err => {
        this.alertTitle = 'Erro';
        this.alertMessage = 'Algo deu errado na sua solicitação, por favor tente novamente mais tarde!';
      },
      () => {
        this.changeAlertVisibility();
        contactForm.resetForm();
        this.isLoading = false;
      }
    );
  }

  changeAlertVisibility() {
    this.alertVisibility ? this.alertVisibility = false : this.alertVisibility = true;
  }

}
