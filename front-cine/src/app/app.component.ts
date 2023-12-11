import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { ClientesPageComponent } from './Pages/clientes-page/clientes-page.component';
import { SalasPageComponent } from './Pages/salas-page/salas-page.component';
import { ClientesCreateComponent } from './Pages/clientes-create/clientes-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './Services/cliente.service';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ClienteService],
  imports: [CommonModule, RouterOutlet, LoginPageComponent, RegisterPageComponent, HomePageComponent, ClientesPageComponent,
    SalasPageComponent, ClientesCreateComponent, NavbarComponent, HttpClientModule, NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-cine';
}
