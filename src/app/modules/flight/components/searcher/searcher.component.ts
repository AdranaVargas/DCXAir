import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent implements OnInit {
  flightForm!: FormGroup;
  flights: any[] = [];
  errorMessage = '';

  constructor(private fb: FormBuilder, private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      currency: ['USD'],
      tripType: ['oneway']
    });
  }

  searchFlights() {
    /* this.flightService.searchFlights(this.flightForm.value)
     .subscribe({
       next: (data) => {
         this.flights = data;
         this.errorMessage = '';
       },
       error: () => {
         this.errorMessage = 'No se han obtenido resultados para su consulta.';
         this.flights = [];
       }
     }); */
 }

}
