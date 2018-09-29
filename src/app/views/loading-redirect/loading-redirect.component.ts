import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../function/login-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loading-redirect',
  templateUrl: './loading-redirect.component.html',
  styleUrls: ['./loading-redirect.component.css']
})
export class LoadingRedirectComponent implements OnInit {

  public showError = true;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
    this.loginService.getNextError();
    this.loginService.tryLogin('login_static/target/courses', 3000, 8000);
  }

}
