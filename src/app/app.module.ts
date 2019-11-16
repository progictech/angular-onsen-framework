import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {OnsenModule} from 'ngx-onsenui';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {Routing} from './app.router';
import {AboutComponent} from './about/about.component';
import {MenuComponent} from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    Routing
  ],
  providers: [],
  entryComponents:[
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
