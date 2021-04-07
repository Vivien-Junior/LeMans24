import { Component, OnInit  } from '@angular/core';
import { Meteo } from './meteo.model';
import * as L from 'leaflet';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'salut';
  meteo$: Meteo;
  constructor(private meteoService: MeteoService){}
  //
  //L.
  // Fonction d'initialisation du composant.
  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const carte = L.map('macarte').setView([47.9482, 0.2083], 13);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carte);

    const carteMonde = L.map('macarte2').setView([44,12], 2);
       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carteMonde);

    L.circle([47.95, 0.2087], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500000
    }).addTo(carteMonde);

    L.circle([51.5, -0.10], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);

    L.circle([37.75, -122.37], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);

    L.circle([40.79, -73.9], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 400000
    }).addTo(carteMonde);

    L.circle([48.76, 9.18], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500000
    }).addTo(carteMonde);

    L.circle([35.6, 140], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);
    
    return this.meteoService.getMeteo().subscribe(meteo => this.meteo$ = meteo)

  }
}