import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  baseUrl = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }
  getAllCountry(): any {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getCountryByName(name:any): any {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  getCountryByRegion(region:any): any {
    return this.http.get(`${this.baseUrl}/region/${region}`);
  }
  getCountryBycca3(cca3:any): any {
    return this.http.get(`${this.baseUrl}/alpha/${cca3}`);
  }


}
