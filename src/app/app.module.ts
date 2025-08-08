import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3reactivoComponent } from './formulario3reactivo/formulario3reactivo.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';


@NgModule({
  // En declaraciones se incluyen todos los componentes que queramos
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3reactivoComponent,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent
    
  ],
  // En imports van las configuraciones adicionales de modulos a parte
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Uso de formularios reactivos
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
