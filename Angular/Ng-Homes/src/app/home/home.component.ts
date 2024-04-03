import { Component, OnInit, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  housingService:HousingService = inject(HousingService);

  constructor(
    // private housingService : HousingService,
  ){}

  ngOnInit(): void {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }


  // housingLocation:Housinglocation={
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // }

  housingLocationList: Housinglocation[] = [];

}
