import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'loginexample-7725a',
        appId: '1:34237633265:web:49d1300ec15da6e6d8cf50',
        storageBucket: 'loginexample-7725a.appspot.com',
        apiKey: 'AIzaSyBjdRC62Yx0X0XowStu3gv9jRMSghBYf0s',
        authDomain: 'loginexample-7725a.firebaseapp.com',
        messagingSenderId: '34237633265',
      })
    ),
    provideAuth(() => getAuth()),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
