import { Injectable } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ServiceProviderService {
    public provider: ServiceProvider = new ServiceProvider();

constructor(private http: HttpClient){}
// CRUD:

create(provider: ServiceProvider){
    return new Promise((resolve, reject) =>{
        this.http.post('http://localhost:2000/api/provider/create', provider).subscribe(response => {
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
        this.http.get('http://localhost:2000/api/provider/').subscribe(response => {
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
        this.http.get('http://localhost:2000/api/provider/' + userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
updateById(userId, obj){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/provider/update/' + userId, obj).subscribe(response =>{
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
        this.http.post('http://localhost:2000/api/user/delete/', {"id": id}).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
};

