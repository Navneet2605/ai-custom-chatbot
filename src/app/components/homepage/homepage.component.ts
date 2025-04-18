import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  cards = [
    {
      title: 'Chat Gpt',
      image: 'assets/images/gpt-logo.png',
      about:'I’m an AI developed by OpenAI to assist, create, and communicate intelligently.'
      
    },
    {
      title: 'Pablo Escobar',
      image: 'assets/images/escobar.png',
      about:'I am Pablo Emilio Escobar Gaviria built an empire from nothing  loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Captain Jack Sparrow',
      image: 'assets/images/captain-jack.jpg',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Living Room',
      image: 'assets/images/gabbar-singh.png',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Thanos',
      image: 'assets/images/thanos.jpg',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Living Room',
      image: 'https://picsum.photos/seed/livingroom/300/200',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Bedroom',
      image: 'https://picsum.photos/seed/bedroom/300/200',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
    {
      title: 'Living Room',
      image: 'https://picsum.photos/seed/livingroom/300/200',
      about:'I built an empire from nothing — loyalty, fear, and ruthless ambition.'
    },
  ];
  selectCard(card: any) {
    alert('Selected: ' + card.title);
    // You can navigate or do something more here
  }
}
