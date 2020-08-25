import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discounts } from '../models/SuperStudentDiscount';
@Injectable({
  providedIn: 'root'
})
export class SuperStudentDiscountService {

  constructor(private http:HttpClient) { }
  getDiscounts(){
    //let url = 'http://localhost:5000/api/superstudentparmsdiscount';
    let url = `http://${window.location.hostname}/service/api/superstudentparmsdiscount`
    return this.http.get<Discounts>(url);
  }
  
}
