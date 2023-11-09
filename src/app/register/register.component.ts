import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isVisible: boolean = false;

  formReg: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  async onSubmit() {
    const req = await this.userService.createUser(
      this.formReg.value.email,
      this.formReg.value.password
    );
    const res = await req;
    console.log(res);
    setTimeout(() => {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
        this.router.navigate(['login']);
      }, 2000);
    }, 500);
  }
}
