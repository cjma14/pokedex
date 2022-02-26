import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/auth.interface";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private BaseUrl: string = "https://reqres.in/api/"
  
  login(user: User): Observable<any> {
    return this.http.post(`${this.BaseUrl}login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.BaseUrl}register`, user);
  }

}