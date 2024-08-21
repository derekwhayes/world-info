import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  country: any = {}

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.country = {
        ...data,
        country: event.target.getAttribute('title')
      }
    });
  } 
}
