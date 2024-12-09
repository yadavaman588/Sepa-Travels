import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component"; // Import CommonModule
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, FooterComponent],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contactForm:FormGroup 
  mail:string = "rishabh@outlook.com"
  phoneNum:number = 123456;

  isSmallScreen = window.innerWidth <= 600;
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.isSmallScreen = window.innerWidth <= 600;
}

  constructor(private fb:FormBuilder){ 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      message: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.contactForm?.valid){
      console.log(this.contactForm.value);
      Swal.fire({title:"Success", text:"Form submitted successfully.", icon:'success'})
    }else{
      Swal.fire({title:"Failed", text:"Something went wrong.", icon:'error'})
    }
  }
  // loadMap() {
  //   const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //     center: { lat: 55.8642, lng: -4.2518 }, // Coordinates for Glasgow
  //     zoom: 10, // Adjust zoom level
  //   });

  //   const marker = new google.maps.Marker({
  //     position: { lat: 55.8642, lng: -4.2518 },
  //     map: map,
  //     title: 'Glasgow',
  //   });
  // }
  sendEmail(){
    const email = this.mail;
    const mailtoLink = `ms-outlook:mailto:${email}`;

    // Open the Outlook app or fallback to default mail client
    window.location.href = mailtoLink;
  }
  makeCall(){
    const phone = this.phoneNum;
    const makecall = `tel:${phone}`;
    window.location.href = makecall;
  }
}
