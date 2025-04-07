
// ✅ EventsListComponent (events/events-list/events-list.component.ts)
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getEvents().subscribe((res: any) => (this.events = res));
  }

  goToEvent(id: string) {
    this.router.navigate(['/events', id]);
  }
}