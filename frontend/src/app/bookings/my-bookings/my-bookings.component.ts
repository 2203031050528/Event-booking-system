// ✅ MyBookingsComponent (bookings/my-bookings/my-bookings.component.ts)
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.component.html',
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMyBookings().subscribe((res: any) => (this.bookings = res));
  }

  cancelBooking(id: string) {
    this.api.cancelBooking(id).subscribe(() => {
      this.bookings = this.bookings.filter(b => b._id !== id);
    });
  }
}