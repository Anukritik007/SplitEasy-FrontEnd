import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public selected:string="dashboard";

  constructor() { }

  ngOnInit() {
  }

  public onDashboardSelection(){
    console.log('Dashboard selected');
    this.selected="dashboard";

  }
  public onActivitiesSelection(){
    console.log('Activities selected');
    this.selected="activities";

  }
  public onExpensesSelection(){
    console.log('Expenses selected');
    this.selected="expenses";

  }

}
