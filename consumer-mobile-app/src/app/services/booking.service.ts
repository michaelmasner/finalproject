import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private navCtrl: NavController) { }

  create(booking: Booking){
    return new Promise((resolve, reject) =>{
        this.http.post('http://localhost:2000/api/booking/create', booking).subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}

getAll(){
    return new Promise((resolve, reject) =>{
        this.http.get('http://localhost:2000/api/booking/').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
getById(id){
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:2000/api/booking/' + id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
getByPropertyId(id){
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:2000/api/booking/getByPropertyId' + id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
updateById(id){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/booking/update/' + id, id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}

remove(id){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/booking/delete/' + id, id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
}
