import { Component } from '@angular/core';

@Component({
  selector: 'app-no-sanitization',
  templateUrl: './no-sanitization.component.html',
})
export class NoSanitizationComponent {
  openWindow() {
    window.open('javascript: alert("Evil code")');
  }
}
