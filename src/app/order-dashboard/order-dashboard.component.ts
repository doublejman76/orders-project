import { Component, OnInit, Output } from '@angular/core';
import { FirstFiveOrdersComponent } from '../first-five-orders/first-five-orders.component';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
@Output()
export class OrderDashboardComponent implements OnInit {
  interval:any
  num:number=0;
  myStopFunction;
  constructor() {

  }

  ngOnInit(): void {
  }

  startDay() {
    this.interval = setInterval(()=>{
      this.num++;
      console.log(this.num)
    }, 2000)
  }

  endDay() {
    function myStopFunction() {
      clearInterval();
    }
  }

}
