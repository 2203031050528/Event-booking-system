// ✅ EventDetailComponent (events/event-detail/event-detail.component.ts)
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: any;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.api.getEvent(id).subscribe((res: any) => (this.event = res));
  }

  bookEvent() {
    this.api.bookEvent({ eventId: this.event._id }).subscribe(() => alert('Booked!'));
  }
}
