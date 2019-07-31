import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  //private jwtHelper: JwtHelperService;
  constructor(private router: Router) {
    //this.jwtHelper = new JwtHelperService;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("AuthGuard#canActivate called");
    return this.checkLogin(localStorage.getItem("isLoggedIn"));
  }
  checkLogin(isLoggedInBoolean: string): boolean {
    //const isExpered = this.jwtHelper.isTokenExpired(jwt);
    if (isLoggedInBoolean == "false") {
      this.router.navigate(["/login"]);
      return false;
    } else if (isLoggedInBoolean == "true") {
      return true;
    }
  }
}
