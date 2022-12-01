import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBienesComponent } from './pages/listar-bienes/listar-bienes.component';

const routes: Routes = [
  {path: '', component: ListarBienesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
