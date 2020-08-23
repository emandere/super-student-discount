import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';

@Component({
  selector: 'app-test-discount-data',
  templateUrl: './test-discount-data.component.html',
  styleUrls: ['./test-discount-data.component.css']
})
export class TestDiscountDataComponent implements OnInit {
  testdriver:Driver;
  constructor() { }

  ngOnInit(): void {
    this.testdriver = {
      age: 17,
      gpa: 3.0,
      isenrolled: true
    };
  }

  testDiscount(){

  }

}
