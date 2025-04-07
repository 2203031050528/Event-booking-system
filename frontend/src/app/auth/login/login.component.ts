import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { ApiService } from '../../shared/api.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Mark as standalone
  imports: [FormsModule], // ✅ Import FormsModule for ngModel
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  login() {
    this.api.login({ email: this.email, password: this.password }).subscribe((res: any) => {
      this.auth.setToken(res.token);
      this.router.navigate(['/']);
    });
  }
}
