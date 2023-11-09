import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user: User | null = null;
  constructor(private userService: UserService) {}

  getUser() {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    setTimeout(() => {
      this.getUser();
    }, 300);
  }
}
