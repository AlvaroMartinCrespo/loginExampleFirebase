import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;

  formReg: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  async loginWithGoogle() {
    this.userService.loginWithGoogle();
  }

  async onSubmit() {
    const req = await this.userService.loginUser(
      this.formReg.value.email,
      this.formReg.value.password
    );
    const res = await req;
    console.log(res);
    setTimeout(() => {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
        this.router.navigate(['']);
      }, 2000);
    }, 500);
  }
}
