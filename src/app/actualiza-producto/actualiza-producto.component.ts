import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-producto',
  templateUrl: './actualiza-producto.component.html',
  styleUrls: ['./actualiza-producto.component.css']
})
export class ActualizaProductoComponent {
  id:number;
  producto:Producto = new Producto();

  constructor(private productoService:ProductosService,private router:Router,private route:ActivatedRoute){}

   ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto= dato;
    },error => console.log(error));
   }

   irAlaListaDeEmpleados(){
    this.router.navigate(['/productos']);
    swal('Producto actualizado',`El empleado ${this.producto.nombreProducto} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.productoService.actualizarProducto(this.id,this.producto).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }


}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

