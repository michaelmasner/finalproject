import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { NavController, AlertController } from "@ionic/angular";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public cellphone: string;
  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error.",
      buttons: ["OK"]
    });
    await alert.present();
  }
  ngOnInit() {
    this.userService
      .getById(parseInt(localStorage.getItem("userId")))
      .then((response: any) => {
        this.firstName = response[0].firstName;
        this.lastName = response[0].lastName;
        this.email = response[0].email;
        this.cellphone = response[0].cellphone;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  navController(){
    this.navCtrl.navigateForward('listings')
  }
}
