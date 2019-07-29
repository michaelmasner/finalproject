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
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error.",
      buttons: ["OK"]
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Property Accepted.',
      duration: 2000
    });
    await toast.present();
  }
  async presentToast2(){
    const toast = await this.toastCtrl.create({
      message: 'Property Rejected.',
      duration: 2000
    });
    await toast.present();
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
  accept(id){
    const statusChange = {
      status: "ACCEPTED"
    }
    this.bookingService.updateById(id, statusChange).then((response:any)=>{
      this.presentToast();
      this.ngOnInit();
    }).catch(err =>{
      this.presentAlert(err);
    })
  }
  reject(id){
    const statusChange = {
      status: "REJECTED"
    }
    this.bookingService.updateById(id, statusChange).then((response:any)=>{
      this.presentToast2();
      this.ngOnInit();
    }).catch(err =>{
      this.presentAlert(err);
    })
  }
  navToDetails(){
    this.navCtrl.navigateForward("listingdetails");
  }
}
