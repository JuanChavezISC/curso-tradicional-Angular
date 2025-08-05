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

import { FormsModule } from '@angular/forms';


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
    
    
  ],
  // En imports van las configuraciones adicionales de modulos a parte
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
