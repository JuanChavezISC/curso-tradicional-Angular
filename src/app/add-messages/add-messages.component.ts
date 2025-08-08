import { Component } from '@angular/core';
/* Importacion del servicio */
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {

  // inyeccion del servicio

  constructor(public messagesService: MessagesService){  }

  message: string = "";

  addMessage(){
    this.messagesService.add(this.message);
    this.message = "";
  }
}
