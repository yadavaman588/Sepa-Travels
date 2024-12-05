import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  phoneNum:number = 12345678;

  constructor(private _route:Router){ }
  about(){
    this._route.navigate(['/About'])
  }
  home(){
    this._route.navigate([''])
  }
  service(){
    this._route.navigate(['/Service'])
  }
  contact(){
    this._route.navigate(['/Contact'])
  }
  callIn(){
    const phone = this.phoneNum;
    const makecall = `tel:${phone}`;
    window.location.href = makecall;
  }

  menuItemSelected(): void {
    // Hide the hamburger icon by modifying its display
    const hamburgerIcon = document.querySelector('.navbar-toggler');

    // Close the collapsible menu by removing the 'show' class
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
