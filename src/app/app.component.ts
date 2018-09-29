import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showEnd = false;
  title = 'erstiverarsche';

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.router.navigateByUrl('login_static/target/courses');
  }
}
