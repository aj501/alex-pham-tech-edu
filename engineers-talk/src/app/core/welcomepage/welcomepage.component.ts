import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  constructor(private router: Router, private elementRef: ElementRef) { }
  @ViewChild('typingSound')
  typingSound!: ElementRef<HTMLAudioElement>;
  animate = false;
  typedText = '';
  text = 'Hi! This is Alex Pham. Thank you for visiting my page.';
  interval = 100; // Delay between each letter typing animation (in milliseconds)

  ngOnInit() {
    this.animateTyping();
  }
  animateTyping() {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i === this.text.length) {
        clearInterval(typingInterval);
        this.animate = true;
        this.playTypingSound();
      } else {
        this.typedText = this.text.slice(0, i + 1);
        i++;
      }
    }, this.interval);
  }

  playTypingSound() {
    const audioElement: HTMLAudioElement = this.typingSound.nativeElement;
    audioElement.currentTime = 0;
    audioElement.play();
  }
  zoomOutAndNavigate(): void {
    const button = this.elementRef.nativeElement.querySelector('#explorebutton');

    
    // Zoom out effect using CSS transition
    button.style.transition = 'transform 0.7s';
    button.style.transform = 'scale(0)';
    
    // Delay removal of the button from the DOM
   // Listen for the 'transitionend' event to trigger navigation
   button.addEventListener('transitionend', () => {
    this.router.navigate(['/homepage']);
  }, { once: true });
}
}

