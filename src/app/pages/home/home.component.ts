import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tutorials!:any
  ngOnInit() { 
    this.tutorials = [ 
      {
        title: '1',
        image: '../../../assets/images/crousel1.png'
      },
      {
        title: '2',
        image: '../../../assets/images/crousel2.png'
      },
      {
        title: '3',
        image: '../../../assets/images/crousel3.png'
      },
      {
        title: '4',
        image: '../../../assets/images/crousel4.png'
      },
      {
        title: '5',
        image: '../../../assets/images/crousel5.png'
      },

    ]; 
} 
} 
export interface Tutorial { 
title?: String; 
image?: String; 
}
