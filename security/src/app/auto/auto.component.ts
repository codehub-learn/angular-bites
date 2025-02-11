import { Component } from '@angular/core';

@Component({
  selector: 'app-auto',
  imports: [],
  templateUrl: './auto.component.html',
  styles: 'h4 { color: var(--french-violet); }'
})
export class AutoComponent {
  title = '<b>Important: </b>Click <a href="javascript: alert(\'Hello Inspector 🕵️\')">here</a> to login!';
}
