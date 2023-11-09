import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: User | null = null;
  constructor(
    private router: Router,
    private auth: Auth,
    private cookieService: CookieService
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }

  getUser() {
    return this.currentUser;
  }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async loginToken() {
    return signInWithCustomToken(
      this.auth,
      this.cookieService.get('token')
    ).then((response) => {
      console.log(response);
    });
  }

  async loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (response) => {
        response.user.getIdToken().then((token) => {
          this.cookieService.set('token', token);
        });
      }
    );
  }

  async loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      (response) => {
        response.user.getIdToken().then((token) => {
          this.cookieService.set('token', token);
        });
      }
    );
  }

  async logout() {
    return signOut(this.auth).then(() => {
      this.cookieService.set('token', '');
      this.router.navigate(['login']);
    });
  }

  getIdToken() {
    return this.cookieService.get('token');
  }

  isLoggedIn() {
    return this.cookieService.get('token') !== '';
  }
}
