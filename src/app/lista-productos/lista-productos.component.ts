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
   this.productos=[{
     "idProducto":1,
     "nombreProducto":"Carbamazepina",
     "descripcion": "Medicamento para dolor de cabeza",
     "estado": "Si hay",
     "nombreLaboratorio": "Invima"
    },
    {
    "idProducto":2,
    "nombreProducto":"Carbamazepina",
    "descripcion": "Medicamento para dolor de cabeza",
    "estado": "No hay",
    "nombreLaboratorio": "Invima"
     }
  ];
  }

  private obtenerEmpleados(){
    this.productoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    });
  }
}
