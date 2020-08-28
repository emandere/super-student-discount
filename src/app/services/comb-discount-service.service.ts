import { Injectable } from '@angular/core';
import { TestResults } from '../models/TestResults';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CombDiscountServiceService {
  urlLocal:string = 'assets/testresult.json';
  urlRemote:string = `http://${window.location.hostname}/servicetest/api/superstudentdiscounttestrunnerui`
  url:string = window.location.hostname.includes('localhost')? this.urlLocal:this.urlRemote;
  constructor(private http:HttpClient) { }
  getTestResults(){
    let getURL = this.url;// + '/superstudentdiscounttestrunnerui'
    return this.http.get<TestResults>(getURL);
  }
  
}
