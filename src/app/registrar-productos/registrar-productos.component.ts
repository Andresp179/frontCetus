import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent {

  productos: Producto= new Producto();


  constructor(private productoService:ProductosService,private route:Router){}

  ngOnInit(): void{
    console.log(this.productos);
  }

  guardarProductos(){
    this.productoService.registrarProducto(this.productos).subscribe(dato => {
      console.log(dato);
      this.irListaProductos();
    },error=>console.error(error));
        
  }

  irListaProductos(){
     this.route.navigate(['/productos']);

  }

  onSubmit(){

    this.guardarProductos();
  }
}
