import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  userCredentials: IUserCredentials = {
    email: '',
    password: '',
  };

  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  signIn(): void {
    this.userService.signIn(this.userCredentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => {
        this.signInError = true;
        setTimeout(() => (this.signInError = false), 3000);
      },
    });
  }
}
