import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(country: string) {
    let api = `http://api.worldbank.org/V2/country/${country}?format=json`;

    return this.http.get(api)
  }

  setCountryData(country: string) {
    let subject = new Subject(); 

    this.fetchCountryData(country).subscribe((data: any) => {
       subject.next({
        country: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        income: data[1][0].incomeLevel.value,
        longitude: data[1][0].longitude,
        latitude: data[1][0].latitude
       })
    })
  
    return subject.asObservable();
  }

}
