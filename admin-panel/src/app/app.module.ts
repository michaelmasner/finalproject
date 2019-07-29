import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { RouterModule } from '@angular/router';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from "@angular/common/http";
import { BookingsComponent } from './components/bookings/bookings.component';
import { PropertyComponent } from './components/property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashBoardComponent,
    ServiceProvidersComponent,
    HomeComponent,
    BookingsComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
