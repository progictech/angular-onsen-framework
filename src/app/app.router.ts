import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
export default appRoutes;
