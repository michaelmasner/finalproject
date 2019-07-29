import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/bookings/booking.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  public bookings: Array<Booking> = [];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getAll().then((response:any) =>{
      this.bookings = response;
    }).catch(err =>{
      console.log(err);
    });
  }

}
