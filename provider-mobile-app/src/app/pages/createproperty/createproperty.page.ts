import { Component, OnInit } from "@angular/core";
import { ListingsService } from "../../services/listings.service";
import {
  NavController,
  ToastController,
  AlertController
} from "@ionic/angular";

@Component({
  selector: "app-createproperty",
  templateUrl: "./createproperty.page.html",
  styleUrls: ["./createproperty.page.scss"]
})
export class CreatepropertyPage implements OnInit {
  public name: string;
  public location: string;
  public price: number;
  public imageUrl: string;

  constructor(
    private listingService: ListingsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
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
      message: 'Property Created.',
      duration: 2000
    });
    await toast.present();
  }
  ngOnInit() {}
  create(){
    const listing = {
      name: this.name,
      location: this.location,
      price: String(this.price),
      imageUrl: this.imageUrl,
      providerId: parseInt(localStorage.getItem("userId"))
    }
    this.listingService.create(listing).then((response:any)=>{
      this.presentToast();
    }).catch(err =>{
      this.presentAlert(err);
    })
  }
  
}
