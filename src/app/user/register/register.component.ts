import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: IUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  registerError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    this.userService.register(this.user).subscribe({
      next: () => this.router.navigate(['/sign-in']),
      error: () => {
        this.registerError = true;
        setTimeout(() => (this.registerError = false), 3000);
      },
    });
  }
}
