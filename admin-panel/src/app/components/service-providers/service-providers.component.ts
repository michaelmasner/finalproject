import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProviderService } from '../../services/service-provider/service-provider.service'


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<ServiceProvider> = [];

  constructor(
    private providerService: ServiceProviderService
  ) {}

  ngOnInit() {
    this.providerService.getAll().then((response:any) =>{
      this.serviceProviders = response;
    }).catch(err =>{
      console.log(err);
    })
  }

}
