import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { ListingsService } from "../../services/listings.service";
import { Listing } from "../../models/listings.model";
import { User } from "src/app/models/user.models";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-listings",
  templateUrl: "./listings.page.html",
  styleUrls: ["./listings.page.scss"]
})
export class ListingsPage implements OnInit {
  public listings: Array<Listing> = [];
  public user = new User();

  constructor(
    private listingsService: ListingsService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error.",
      buttons: ["OK"]
    });
    await alert.present();
  }

  ngOnInit() {
    this.user.id = +localStorage.getItem("userId");
    this.listingsService
      .getAll()
      .then((response: any) => {
        this.listings = response;
        console.log(this.listings);
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  signOut() {
    this.navCtrl.navigateBack("login");
    this.authService.logOut();
  }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToDetails(id){
    this.navCtrl.navigateForward("listingdetails", {
      queryParams:{
        property: id
      }
    });

  }
}
