import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
}
