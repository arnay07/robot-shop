import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  showSignOutMenu: boolean = false;
  user: IUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user: IUser | null) => {
        this.user = user;
      },
    });
  }

  signOutToggle(): void {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(): void {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
