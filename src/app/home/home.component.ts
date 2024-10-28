import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private elemenRef: ElementRef) {}
  ngOnInit(): void {}
  scrollToMenu() {
    const menuElement = this.elemenRef.nativeElement.querySelector('#menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToContact() {
    console.log('>>>>>>>>');
    const contactElement =
      this.elemenRef.nativeElement.querySelector('#contact');
    console.log('<<<<<<<<');
    if (contactElement) {
      console.log('error', Error);
      contactElement.scrollIntoView({ behavior: 'smooth' });
      console.log('error', Error);
    }
  }
}
