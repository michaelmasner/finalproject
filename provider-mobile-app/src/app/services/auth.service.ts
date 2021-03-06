import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http
        .post("http://localhost:2000/api/providerauth/login", authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            localStorage.setItem("userId", response.id);
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
  register(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http
        .post("http://localhost:2000/api/providerauth/register", authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.insertId);
            localStorage.setItem("userId", response.insertId);
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
};
