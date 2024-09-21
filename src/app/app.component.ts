import { Component, OnInit } from '@angular/core';
// You might need to import particles.js if TypeScript complains
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test101';

  ngOnInit() {
    // Assuming the 'particles.json' file is located inside 'assets'
    particlesJS.load('particles-js', '../assets/particles.json', () => {
      console.log('Particles.js config loaded');
    });
  }
}


