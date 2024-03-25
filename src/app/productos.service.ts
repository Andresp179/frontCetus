import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseURL= "http://localhost:8080/api/v1/productos"// todos los productos del back

  constructor(private httpClient : HttpClient) { }

  //metodo para obtener productos
  obtenerListaProductos():Observable<Producto[]>{
   return this.httpClient.get<Producto[]>(`${this.baseURL}`);

  } 
  //este metodo nos sirve para registrar un producto
    registrarProducto(producto:Producto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto);
  }
}
