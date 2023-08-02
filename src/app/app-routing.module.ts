import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ImagenComponent } from './components/imagen/imagen.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "catalogo", component: CatalogoComponent},
  {path: "imagen/:id", component: ImagenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
