import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.user).subscribe({
      next: (data) => {
        localStorage.setItem('authtoken', data.token);
        localStorage.setItem('userrole', data.role);
        console.log(data.role);
        if (data.role == 'ADMIN') {
          this.router.navigate(['/allemployees']);
        } else if (data.role == 'USER') {
          this.router.navigate(['/newemployee']);
        }
      },
      error: (error) => {
        alert('Error logging in user!');
        console.log(error);
      },
    });
  }
}
