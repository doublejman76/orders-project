import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-five-orders',
  templateUrl: './first-five-orders.component.html',
  styleUrls: ['./first-five-orders.component.css']
})
@Input()
export class FirstFiveOrdersComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
