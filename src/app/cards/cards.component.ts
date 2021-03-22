import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mode = "stop";
      this.data = [
        {
          title: 'Apple',
          srcForImage: 'src/assets/tv2.png',
          label: '3',
          tags: ['apple', 'boy', 'cat', 'dog'],
          name: 'apple',
          amount : 100
        },
        {
          title: 'Apple',
          srcForImage: 'assets/tv2.png',
          label: '3',
          tags: ['apple', 'boy', 'cat', 'dog'],
          name: 'apple',
          amount : 100
        },
        {
          title: 'Apple',
          srcForImage: 'assets/tv2.png',
          label: '3',
          tags: ['apple', 'boy', 'cat', 'dog'],
          name: 'apple',
          amount : 100
        },
        {
          title: 'Apple',
          srcForImage: 'assets/tv2.png',
          label: '3',
          tags: ['apple', 'boy', 'cat', 'dog'],
          name: 'apple',
          amount : 100
        },
        {
          title: 'Apple',
          srcForImage: 'assets/tv2.png',
          label: '3',
          tags: ['apple', 'boy', 'cat', 'dog'],
          name: 'apple',
          amount : 100
        }
  
  
      ]
    }, 80000)
  }
  srcForImage: 'assets/tv2.png';
  data = [];
  dataForAnimation = [1,2,3,4,5];
  mode = 'run';
}
