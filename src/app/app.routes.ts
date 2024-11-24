import { Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:"full"
    },
];
