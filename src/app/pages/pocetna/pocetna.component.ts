import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
})
export class PocetnaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageObject: Array<object> = [
    {
      image: 'assets/img/spolja1.jpg',
      thumbImage: 'assets/img/spolja1.jpg',
      alt: 'alt of image',
      title: 'Planet Bojana Las Vegas',
    },
    {
      image: 'assets/img/spolja2.jpg',
      thumbImage: 'assets/img/spolja2.jpg',
      title: 'Planet Bojana Coachella Valley',
      alt: 'Image alt',
      order: 1,
    },
    {
      image: 'assets/img/unutra1.jpg',
      thumbImage: 'assets/img/unutra1.jpg',
      title: 'Planet Bojana Cancun',
      alt: 'Image altt',
    },
    {
      image: 'assets/img/unutra2.jpg',
      thumbImage: 'assets/img/unutra2.jpg',
      title: 'Planet Bojana Paris',
      alt: 'Image alternative',
    },
    {
      image: 'assets/img/unutra3.jpg',
      thumbImage: 'assets/img/unutra3.jpg',
      title: 'Planet Bojana New York',
      alt: 'Image alte',
    },{
      image: 'assets/img/unutra4.jpg',
      thumbImage: 'assets/img/unutra4.jpg',
      title: 'Planet Bojana Sydney',
      alt: 'Image alter',
    }
  ];
}
