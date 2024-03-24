import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  productos:Producto[];

  constructor(private productoServicio: ProductosService){}

  ngOnInit():void{   
  this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    });
  }
}
