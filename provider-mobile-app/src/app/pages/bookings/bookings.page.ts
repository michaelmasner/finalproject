import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.model";
import {
  NavController,
  ToastController,
  AlertController
} from "@ionic/angular";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"]
})
export class BookingsPage implements OnInit {
  public bookings: Array<Booking> = [];
  public listId: string;

  constructor(
    private bookingService: BookingService,
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
    const params = new URLSearchParams(location.search);
    this.listId = params.get("property");
    this.bookingService
      .getByPropertyId(parseInt(this.listId))
      .then((response:any) =>{
        this.bookings = response;
        console.log(response);
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }

}
