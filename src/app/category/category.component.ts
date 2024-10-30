import { Component } from '@angular/core';
// import { ElementRef, AfterViewInit, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         console.log('Intersection observed:', entry.isIntersecting); // Log when observer triggers
  //         this.zone.run(() => {
  //           if (entry.isIntersecting) {
  //             this.animatedH1.nativeElement.classList.add('scrolled-into-view');
  //             observer.unobserve(entry.target); // Stop observing after first trigger
  //           }
  //         });
  //       });
  //     },
  //     { threshold: 0.1 } // Trigger at 10% visibility
  //   );
  //   if (this.animatedH1?.nativeElement) {
  //     observer.observe(this.animatedH1.nativeElement);
  //   }
  // }
}
