import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Discounts, SuperStudentDiscount, UpdateDiscountResponse } from '../models/SuperStudentDiscount';
@Injectable({
  providedIn: 'root'
})
export class SuperStudentDiscountService {
  //url:string = 'http://localhost:5000/api/superstudentparmsdiscount';
    url:string = `http://${window.location.hostname}/service/api/superstudentparmsdiscount`
  constructor(private http:HttpClient) { }
  getDiscounts(){
    
    return this.http.get<Discounts>(this.url);
  }

  updateDiscounts(superStudentDiscount:SuperStudentDiscount)
  {
     return this.http.post<UpdateDiscountResponse>(this.url,JSON.stringify(superStudentDiscount),this.setOptions());
  }

  setOptions()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return httpOptions;
  }
  
}
