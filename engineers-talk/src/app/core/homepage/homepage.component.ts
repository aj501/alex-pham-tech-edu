import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
  
})
export class HomepageComponent implements OnInit {

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

  posts: Post[] = [
    { title: 'First Post', content: 'Lorem ipsum dolor sit amet...', author: 'John Doe', featuredImage: 'https://example.com/first-post-image.jpg' },
    { title: 'Second Post', content: 'Ut enim ad minim veniam...', author: 'Jane Smith', featuredImage: 'https://example.com/second-post-image.jpg' },
    { title: 'Third Post', content: 'Duis aute irure dolor in reprehenderit...', author: 'Bob Johnson', featuredImage: 'https://example.com/third-post-image.jpg' },
    // Add more posts as needed
  ];

}
