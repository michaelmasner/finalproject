import { Component, OnInit } from "@angular/core";
import { ListingsService } from "../../services/listings.service";
// import { Listing } from "../../models/listings.model";
import { Booking } from "../../models/booking.model";
import { BookingService } from "../../services/booking.service";
import {
  NavController,
  ToastController,
  AlertController
} from "@ionic/angular";


@Component({
  selector: "app-listingdetails",
  templateUrl: "./listingdetails.page.html",
  styleUrls: ["./listingdetails.page.scss"]
})
export class ListingdetailsPage implements OnInit {

  public listId: string;
  public userId: number = parseInt(localStorage.getItem("userId"));
  public listName: string;
  public listLocation: string;
  public price: number;
  public image_url: string;
  public today = new Date();
  public dateTo = new Date().toISOString();
  public dateFrom = new Date().toISOString();

  constructor(
    private listingService: ListingsService,
    // private listing: Listing,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    //private booking: Booking,
    private bookingService: BookingService
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
      message: 'Booked',
      duration: 2000
    });
    await toast.present();
  }
  ngOnInit() {
    const params = new URLSearchParams(location.search);
     this.listId = params.get("property");

    this.listingService
      .getById(this.listId)
      .then((response: any) => {
        this.listName = response[0].name;
        this.listLocation = response[0].location;
        this.price = parseInt(response[0].price);
        this.image_url = response[0].imageUrl;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  // Rename function names
  dateToChanged(date){
    console.log(date.detail.value);
    console.log(this.dateTo);
  }
  dateFromChanged(date){
    console.log(date.detail.value);
    console.log(this.dateFrom);
  }
  // Booking function
  book(){
    const newBooking = {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      userId: this.userId,
      propertyId: parseInt(this.listId),
      status: "NEW"
    }
    this.bookingService.create(newBooking).then((response:any) =>{
      this.presentToast();
    }).catch(err =>{
      this.presentAlert(err);
    });
  }
}
