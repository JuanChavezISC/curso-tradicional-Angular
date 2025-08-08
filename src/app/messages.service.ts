import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  /* espera recibir un parametro de tipo string
      posteriormente se incluye dentro del array messages
      y despues con el metodo push, se pasa el mensaje recibido */
  add(message:string){
    this.messages.push(message);
  }
}
