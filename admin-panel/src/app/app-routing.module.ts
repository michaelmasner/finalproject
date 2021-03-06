import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { PropertyComponent } from './components/property/property.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-providers', component: ServiceProvidersComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'property', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
