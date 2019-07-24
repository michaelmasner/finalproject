import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public user: User = new User();

constructor(private http: HttpClient, private navCtrl: NavController){}
// CRUD:

create(user: User){
    return new Promise((resolve, reject) =>{
        this.http.post('http://localhost:2000/api/user/', user).subscribe(response => {
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
        this.http.get('http://localhost:2000/api/user/').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
getById(userId){
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:2000/api/user/:id', userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
updateById(userId){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/user/update', userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}

remove(userId){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/user/delete', userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
};

