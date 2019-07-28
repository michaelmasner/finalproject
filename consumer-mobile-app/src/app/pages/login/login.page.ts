import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from "../../models/user.models";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  public user = new User();
  public email: string;
  public password: string;
  public users: any;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user = userService.user;
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Incorrect credentials",
      buttons: ["OK"]
    });
    await alert.present();
  }
  login() {
    const authUser = {
      email: this.email,
      password: this.password
    };
    this.authService
      .login(authUser)
      .then(res => {
        const testId = localStorage.getItem("userId");

        this.navCtrl.navigateForward("listings");
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  navToRegistration() {
    this.navCtrl.navigateForward("registration");
  }
}

