import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public onHeaderClick(){
    this.router.navigate(['/']);
  }

  public onLoginClick(){
    this.router.navigate(['/login']);
  }

  public onSignupClick(){
    this.router.navigate(['/signup']);
  }
}
