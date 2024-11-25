import { Component } from '@angular/core';
import { NavbarComponent } from "../../Navbar/navbar/navbar/navbar.component";
import { FooterComponent } from "../../Footer/footer/footer.component";

@Component({
  selector: 'app-service',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
