import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight-model';

import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent implements OnInit {
  flightForm!: FormGroup;
  flights: Flight[] = [];

  constructor(private fb: FormBuilder, private flightService: FlightService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      origin: ['MZL', Validators.required],
      destination: ['PEI', Validators.required],
      currency: ['USD'],
      tripType: ['oneway']
    });
  }

  searchFlights() {
    const origin = this.flightForm.get('origin')?.value;
    const destination = this.flightForm.get('destination')?.value;
    this.flightService.searchFlights(origin, destination)
     .subscribe({
       next: (data) => {
         this.flights = data;
       },
       error: (err) => {
        this.dialog.open(AlertModalComponent, {
          data: err
        });
        this.flights = [];
       }
     });
 }

}
