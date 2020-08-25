import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SuperStudentDiscount } from '../models/SuperStudentDiscount'
import { SuperStudentDiscountService } from '../services/super-student-discount.service';

@Component({
  selector: 'app-update-discount-data',
  templateUrl: './update-discount-data.component.html',
  styleUrls: ['./update-discount-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateDiscountDataComponent implements OnInit {
  superStudentDiscountCreate:SuperStudentDiscount;
  states:string[]=['AZ','CO','OH']
  constructor(private superStudentDiscountService:SuperStudentDiscountService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.superStudentDiscountCreate ={
      state: "OH",
      driverage:17,
      drivereligiblegpa:3.5,
      drivermediumgpa :3.5,
      driverhighgpa :3.8,
      discountmediumamount:20,
      discounthighamount:40
    };
  }

  updateSuperStudentDiscount() {
    return this.superStudentDiscountService.updateDiscounts(this.superStudentDiscountCreate).subscribe(
      result=>this.snackbar.open("Update Discount",result.status,{ duration: 5000 })
    );
  }

}
