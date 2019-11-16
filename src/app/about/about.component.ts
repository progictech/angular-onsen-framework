import { Component, OnInit } from '@angular/core';
import * as dependecyData from './dependencyList.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  copyrightYear: number;
  progicUrl = 'https://github.com/progictech';
  dependecyList: Array<string>;

  constructor() { }

  ngOnInit() {
    this.copyrightYear = new Date().getFullYear();
    this.dependecyList = dependecyData['default'];
    this.dependecyList = this.dependecyList.filter(value=>{
      return (value['name']) && (value['author']);
    });
  }

}

