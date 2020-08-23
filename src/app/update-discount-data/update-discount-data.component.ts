import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SuperStudentDiscount } from '../models/SuperStudentDiscount'

@Component({
  selector: 'app-update-discount-data',
  templateUrl: './update-discount-data.component.html',
  styleUrls: ['./update-discount-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateDiscountDataComponent implements OnInit {
  superStudentDiscountCreate:SuperStudentDiscount;
  constructor() { }

  ngOnInit(): void {
    this.superStudentDiscountCreate ={
      driverage:17,
      drivermediumgpa :3.5,
      driverhighgpa :3.8,
      discountmediumamount:20,
      discounthighamount:40
    };
  }

  updateSuperStudentDiscount() {
    
  }

}
