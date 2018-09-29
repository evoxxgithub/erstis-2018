import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../function/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private login: LoginServiceService) { }
  public showErrorMessage = false;
  public error = '';
  private subscription;
  ngOnInit() {
      this.error = this.login.currentError;
      this.showErrorMessage = this.login.currentError !== null && this.login.currentError !== '';
    this.error = this.login.currentError;

  }

  public onSubmit(): void {
    this.login.tryLogin('login_redirect', 300, 1000);
  }

  public onCloseError(): void {
    this.showErrorMessage = false;
  }

}
