import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../models/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private baseurl = "assets/farmer.json";
  constructor(private http: HttpClient) { }
  getall(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`)

  }
  getbyemail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}/search?email=${email}`)

  }
  addfarmer(records: Farmer): Observable<any> {
    return this.http.post<any[]>(`${this.baseurl}`, { data: records })

  }
  updatefarmer(id: number, records: Farmer): Observable<any> {
    return this.http.put<any[]>(`${this.baseurl}/id/${id}`, { data: records })
  }
  deletefarmer(id: number): Observable<any> {
    return this.http.delete<any[]>(`${this.baseurl}/id/${id}`)
  }
  getbyid(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`)

  }
  deletefarmer1(name: string): Observable<any> {
    return this.http.delete<any[]>(`${this.baseurl}/name/${name}`)
  }

}
