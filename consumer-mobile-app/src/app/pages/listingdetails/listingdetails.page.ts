import { Component, OnInit } from "@angular/core";
import { ListingsService } from "../../services/listings.service";
// import { Listing } from "../../models/listings.model";

import {
  // NavController,
  // ToastController,
  AlertController
} from "@ionic/angular";


@Component({
  selector: "app-listingdetails",
  templateUrl: "./listingdetails.page.html",
  styleUrls: ["./listingdetails.page.scss"]
})
export class ListingdetailsPage implements OnInit {
  public listId: string;
  public userId: number;
  public listName: string;
  public listLocation: string;
  public price: string;
  public image_url: string;
  public today = new Date();

  constructor(
    private listingService: ListingsService,
    // private listing: Listing,
    // private navCtrl: NavController,
    // private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }
  ngOnInit() {
    const params = new URLSearchParams(location.search);
     this.listId = params.get("property");
    // this.userId = parseInt(localStorage.getItem("userId"));

    this.listingService
      .getById(this.listId)
      .then((response: any) => {
        this.listName = response[0].name;
        this.listLocation = response[0].location;
        this.price = response[0].price;
        this.image_url = response[0].imageUrl;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
}
