import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cityList = [ { city_name: "abhijeet", prov_name: "Jawa Barat" },
               { city_name: "Di", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Sagar", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor() { }

  ngOnInit() {
    
    console.log("City Component Init");
    
  }

  

}
