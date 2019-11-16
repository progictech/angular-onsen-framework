import {Component, OnInit} from '@angular/core';
import * as ons from 'onsenui';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'pwa-starter';

  constructor() { }

  ngOnInit(): void {
    ons.platform.select('android');
  }

}
