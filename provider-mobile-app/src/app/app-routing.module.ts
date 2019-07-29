import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'listingdetails', loadChildren: './pages/listingdetails/listingdetails.module#ListingdetailsPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'createproperty', loadChildren: './pages/createproperty/createproperty.module#CreatepropertyPageModule' },
  { path: 'editproperty', loadChildren: './pages/editproperty/editproperty.module#EditpropertyPageModule' },
  { path: 'bookings', loadChildren: './pages/bookings/bookings.module#BookingsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
