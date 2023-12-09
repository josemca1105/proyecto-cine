import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ClientesPageComponent } from './Pages/clientes-page/clientes-page.component';
import { SalasPageComponent } from './Pages/salas-page/salas-page.component';
import { ClientesCreateComponent } from './Pages/clientes-create/clientes-create.component';
import { ClienteEditComponent } from './Pages/cliente-edit/cliente-edit.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'clientes', component: ClientesPageComponent, title: 'Listado de Clientes' },
  { path: 'clientes/create', component: ClientesCreateComponent, title: 'Registrar Cliente' },
  { path: 'clientes/editar/:id', component: ClienteEditComponent, title: 'Editar Cliente' },
  { path: 'salas', component: SalasPageComponent, title: 'Listado de Salas' }
];
