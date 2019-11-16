import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tabs: Array<any>;
  @Input()
  menuHeader;
  constructor() { }

  ngOnInit() {
    this.tabs = [
      { path: 'home',       label: 'Home',       },
      { path: 'about',      label: 'About Us',      },
    ];
  }

}
