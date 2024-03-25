import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  

  productos:Producto[];
 
  constructor(private productoServicio: ProductosService,private router:Router){}

  ngOnInit():void{   
  this.obtenerProductos();
  }

 
  actualizarProducto(id:number){
    this.router.navigate(['actualiza-empleado',id]);
  }
 
  eliminarProducto(id:number){
    this.productoServicio.eliminarProducto(id).subscribe(dato => {
      this.obtenerProductos();
     });
     }

     private obtenerProductos(){
      this.productoServicio.obtenerListaProductos().subscribe(dato => {
        this.productos = dato;
      });
    }
}

