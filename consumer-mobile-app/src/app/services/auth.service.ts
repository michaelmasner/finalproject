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
        .post("http://localhost:2000/api/userauth/login", authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response);
            console.log(response.id);
            //localStorage.setItem("userId", JSON.stringify(response.id));
            localStorage.setItem("userId", response.id);
            localStorage.setItem("isLoggedIn", "true");
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
  logOut() {
    localStorage.setItem("isLoggedIn", "false");
    //localStorage.setItem("jwt", "");
  }
  register(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http
        .post("http://localhost:2000/api/userauth/register", authUser, {
          headers
        })
        .subscribe(
          (response: any) => {
            console.log(response.insertId);
            localStorage.setItem("userId", response.insertId);
            localStorage.setItem('isLoggedIn', 'true');
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
