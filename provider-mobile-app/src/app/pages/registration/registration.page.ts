import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from "../../models/user.models";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"]
})
export class RegistrationPage {
  public user = new User();
  public name: string;
  public surname: string;
  public cellphone: string;
  public email: string;
  public password: string;
  public role: string = "provider";
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
      header: "Please fill in credentials.",
      buttons: ["OK"]
    });
    await alert.present();
  }
  async emailAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }
  register() {
    const authUser = {
      firstName: this.name,
      lastName: this.surname,
      cellphone: this.cellphone,
      email: this.email,
      password: this.password,
      role: this.role
    };
    this.authService
      .register(authUser)
      .then(res => {
        const testId = localStorage.getItem("userId");
        console.log(testId);
        this.navCtrl.navigateForward("listings");
      })
      .catch(err => {
        if(this.email != null){
          this.emailAlert(err.error);
        }
        else{
          this.presentAlert(err);
        } 
      });
  }
  navToLogin() {
    this.navCtrl.navigateForward("login");
  }
}
