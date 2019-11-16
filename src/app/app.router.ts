import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
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
export const Routing = RouterModule.forRoot(appRoutes);
