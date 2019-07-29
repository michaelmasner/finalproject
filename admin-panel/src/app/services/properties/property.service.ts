import { Injectable } from '@angular/core';
import { Property } from '../../models/property';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  public property = new Property();

  constructor(private http: HttpClient) { }

  create(property: Property){
    return new Promise((resolve, reject) =>{
        this.http.post('http://localhost:2000/api/property/create', property).subscribe(response => {
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
        this.http.get('http://localhost:2000/api/property/').subscribe(response => {
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
        this.http.get('http://localhost:2000/api/property/' + id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
updateById(id, obj){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:2000/api/property/update/' + id, obj).subscribe(response =>{
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
        this.http.post('http://localhost:2000/api/property/delete/', {"id": id}).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
}
};
