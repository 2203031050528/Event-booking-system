// ✅ RegisterComponent (auth/register/register.component.ts)
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private api: ApiService, private router: Router) {}

  register() {
    this.api.register({ name: this.name, email: this.email, password: this.password }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
