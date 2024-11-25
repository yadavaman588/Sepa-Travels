import { Component } from '@angular/core';
import { NavbarComponent } from "../../Navbar/navbar/navbar/navbar.component";
import { FooterComponent } from "../../Footer/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
