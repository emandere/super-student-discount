import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Discounts, SuperStudentDiscount, UpdateDiscountResponse, DiscountResult } from '../models/SuperStudentDiscount';
import { Driver } from '../models/Driver';
@Injectable({
  providedIn: 'root'
})
export class SuperStudentDiscountService {
  urlLocal:string = 'http://localhost:5000';
  urlRemote:string = `http://${window.location.hostname}/service`
  url:string = window.location.hostname.includes('localhost')? this.urlLocal:this.urlRemote;
  constructor(private http:HttpClient) { }
  getDiscounts(){
    let getURL = this.url + '/api/superstudentparmsdiscount'
    return this.http.get<Discounts>(getURL);
  }

  updateDiscounts(superStudentDiscount:SuperStudentDiscount)
  {
     let updateURL = this.url + '/api/superstudentparmsdiscount'
     return this.http.post<UpdateDiscountResponse>(updateURL,JSON.stringify(superStudentDiscount),this.setOptions());
  }

  testDiscount(driver:Driver)
  {
    let testURL = this.url + '/api/superstudentdiscount'
     return this.http.post<DiscountResult>(testURL,JSON.stringify(driver),this.setOptions());
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
