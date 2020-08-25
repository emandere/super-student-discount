import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';
import { DiscountResult } from '../models/SuperStudentDiscount';
import { SuperStudentDiscountService } from '../services/super-student-discount.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-discount-data',
  templateUrl: './test-discount-data.component.html',
  styleUrls: ['./test-discount-data.component.css']
})
export class TestDiscountDataComponent implements OnInit {
  testdriver:Driver;
  states:string[]=['AZ','CO','OH'];
  maritalStatuses:string[]=['divorced','married','single'];
  relationships:string[]=['child','spouse','insured'];
  studentstatuses:string[]=['enrolled','graduated','dropped out'];
  discountResult$:Observable<DiscountResult>=null;
  hasViolation:boolean;
  constructor(private superStudentDiscountService:SuperStudentDiscountService ) { }

  ngOnInit(): void {
    this.testdriver = {
      state: 'OH',
      driverAge: 17,
      driverGPA: 3.0,
      maritalstatus:"single",
      violations: [],
      studentstatus: "enrolled",
      relationship: "child"
    };
    this.hasViolation = false;
  }

  testDiscount(){
    if(this.hasViolation){
      this.testdriver.violations = ["DummyVIO"];
    }
    else
    {
      this.testdriver.violations = [];
    }
    this.discountResult$ = this.superStudentDiscountService.testDiscount(this.testdriver)
  }

}
