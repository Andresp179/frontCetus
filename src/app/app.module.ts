import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component'
import { FormsModule } from '@angular/forms';
import { ActualizaProductoComponent } from './actualiza-producto/actualiza-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    RegistrarProductosComponent,
    ActualizaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
