import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';

export const routes: Routes = [
  { path: '', component: EventsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'create-event', component: CreateEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
