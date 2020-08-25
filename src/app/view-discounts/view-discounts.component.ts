import { Component, OnInit } from '@angular/core';
import { SuperStudentDiscountService } from '../services/super-student-discount.service';
import { Observable } from 'rxjs';
import { Discounts } from '../models/SuperStudentDiscount';

@Component({
  selector: 'app-view-discounts',
  templateUrl: './view-discounts.component.html',
  styleUrls: ['./view-discounts.component.css']
})
export class ViewDiscountsComponent implements OnInit {

  constructor(private superStudentDiscountService:SuperStudentDiscountService) { }
  discounts$:Observable<Discounts>;
  displayedColumns: string[] = ['State','Age','EligGPA','MedGPA','HighGPA','MedDisc','HighDisc'];
  ngOnInit(): void {
    this.discounts$ = this.superStudentDiscountService.getDiscounts();
  }

}
