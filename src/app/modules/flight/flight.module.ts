import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearcherComponent } from './components/searcher/searcher.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlightService } from './services/flight.service';

const routes: Routes = [
  {
    path: '',
    component: SearcherComponent,
  }
  
];

@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FlightService
  ]
})
export class FlightModule { }
