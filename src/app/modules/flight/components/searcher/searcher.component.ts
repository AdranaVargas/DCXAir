import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight-model';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent implements OnInit {
  flightForm!: FormGroup;
  flights: Flight[] = [];
  errorMessage = '';

  constructor(private fb: FormBuilder, private flightService: FlightService) {
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
         console.log(data)
         this.errorMessage = '';
       },
       error: () => {
         this.errorMessage = 'No se han obtenido resultados para su consulta.';
         this.flights = [];
       }
     });
 }

}
