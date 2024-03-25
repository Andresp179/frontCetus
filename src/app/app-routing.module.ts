import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';

const routes: Routes = [
  {path: "productos",component:ListaProductosComponent},
  {path: '',redirectTo:'productos',pathMatch:'full'},
  {path: 'registrar-productos',component:RegistrarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
