import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseURL= "http://localhost:8080/api/vi/Producto"// todos los productos

  constructor(private httpClient : HttpClient) { }

  obtenerListaProductos():Observable<Producto[]>{
   return this.httpClient.get<Producto[]>('$this.baseURL');

  }
}
