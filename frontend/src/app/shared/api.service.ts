// shared/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // Update to your backend URL

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${this.baseUrl}/events`);
  }

  getEvent(id: string) {
    return this.http.get(`${this.baseUrl}/events/${id}`);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  bookEvent(data: any) {
    return this.http.post(`${this.baseUrl}/bookings`, data);
  }

  getMyBookings() {
    return this.http.get(`${this.baseUrl}/bookings/my`);
  }

  cancelBooking(id: string) {
    return this.http.delete(`${this.baseUrl}/bookings/${id}`);
  }
}
