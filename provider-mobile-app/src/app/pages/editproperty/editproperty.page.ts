import { Component, OnInit } from "@angular/core";
import { ListingsService } from "../../services/listings.service";
import {
  NavController,
  ToastController,
  AlertController
} from "@ionic/angular";

@Component({
  selector: "app-editproperty",
  templateUrl: "./editproperty.page.html",
  styleUrls: ["./editproperty.page.scss"]
})
export class EditpropertyPage implements OnInit {
  public name: string;
  public location: string;
  public price: string;
  public imageUrl: string;

  constructor(
    private listingService: ListingsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const listId = +localStorage.getItem("listId");
    this.listingService
      .getById(listId)
      .then((response: any) => {
        this.name = response[0].name;
        this.location = response[0].location;
        this.price = response[0].price;
        this.imageUrl = response[0].imageUrl;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error.",
      buttons: ["OK"]
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Updated Property Deatils.',
      duration: 2000
    });
    await toast.present();
  }
  edit() {
    const listId = +localStorage.getItem("listId");
    const list = {
      name: this.name,
      location: this.location,
      price: this.price,
      imageUrl: this.imageUrl,
      providerId: +localStorage.getItem("userId")
    }
    this.listingService.updateById(listId, list).then((response : any) =>{
      this.presentToast();
    }).catch(err => {
      this.presentAlert(err);
    });
  }
}
