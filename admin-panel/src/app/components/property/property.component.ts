import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from '../../services/properties/property.service'
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public properties: Array<Property> = [];
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getAll().then((response:any) =>{
      this.properties = response;
    }).catch(err =>{
      console.log(err);
    });
  }
}
