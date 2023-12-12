import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  lastname: any;
  router: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  register(): void {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.userService.register(data).subscribe(
      (response) => {
        if (response.success) {
          // Redireccionar al usuario a la página de inicio
          this.router.navigate(['/index']);
        } else {
          // Mostrar un mensaje de error
          alert(response.message);
        }
      },
      (error) => {
        // Mostrar un mensaje de error
        alert(error.message);
      },
    );
  }

}
