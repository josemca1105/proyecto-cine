import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ClientesPageComponent } from './Pages/clientes-page/clientes-page.component';
import { SalasPageComponent } from './Pages/salas-page/salas-page.component';
import { ClientesCreateComponent } from './Pages/clientes-create/clientes-create.component';
import { ClienteEditComponent } from './Pages/cliente-edit/cliente-edit.component';
import { SalasCreateComponent } from './Pages/salas-create/salas-create.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'index', component: HomePageComponent, title: 'Home Page' },
  { path: 'login', component: LoginPageComponent, title: 'Iniciar Sesión' },
  { path: 'signin', component: RegisterPageComponent, title: 'Registrarse' },
  { path: 'clientes', component: ClientesPageComponent, title: 'Listado de Clientes', canActivate: [authGuard] },
  { path: 'clientes/create', component: ClientesCreateComponent, title: 'Registrar Cliente', canActivate: [authGuard] },
  { path: 'clientes/editar/:id', component: ClienteEditComponent, title: 'Editar Cliente', canActivate: [authGuard] },
  { path: 'salas', component: SalasPageComponent, title: 'Listado de Salas', canActivate: [authGuard] },
  { path: 'salas/create', component: SalasCreateComponent, title: 'Crear Salas', canActivate: [authGuard] },
];
