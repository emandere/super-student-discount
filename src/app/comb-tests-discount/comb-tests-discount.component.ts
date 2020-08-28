import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestResults } from '../models/TestResults';
import { CombDiscountServiceService } from '../services/comb-discount-service.service';

@Component({
  selector: 'app-comb-tests-discount',
  templateUrl: './comb-tests-discount.component.html',
  styleUrls: ['./comb-tests-discount.component.css']
})
export class CombTestsDiscountComponent implements OnInit {

  constructor(private comboDiscountService:CombDiscountServiceService) { }
  testResults$:Observable<TestResults>;
  displayedColumns: string[] = ['State','DriverAge','Relationship','StudentStatus', 'Violations', 'DriverGPA', 'MaritalStatus','Results'];
  ngOnInit(): void {
    this.testResults$ = this.comboDiscountService.getTestResults();
  }

}
