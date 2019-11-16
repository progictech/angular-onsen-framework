import { Component, OnInit } from '@angular/core';
import dependecyData from './dependencyList.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  copyrightYear: number;
  progicUrl = 'https://github.com/progictech';
  dependecyList: any[];

  constructor() { }

  ngOnInit() {
    this.copyrightYear = new Date().getFullYear();
    this.dependecyList = dependecyData;
    this.dependecyList = this.dependecyList.filter(value => {
        return (value.name) && (value.author);
      });
  }

}

