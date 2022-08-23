import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  public login(): void {
    if (
      this.loginForm.controls.username.value !== 'user' ||
      this.loginForm.controls.password.value !== 'user'
    ) {
      alert('Credenziali errate');
      this.loginForm.reset();
      return;
    }
    this.saveLoggedIn();
    this.router.navigateByUrl('/home')
  }

  private saveLoggedIn(): void {
    localStorage.setItem('logged', 'true');
  }

}
