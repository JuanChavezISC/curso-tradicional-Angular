import { Component } from '@angular/core';
/* Importacion del servicio */
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {

    // inyeccion del servicio

  constructor(public messagesService: MessagesService){  }
}
