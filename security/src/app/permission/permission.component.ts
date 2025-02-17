import { Component } from '@angular/core';
import { PermissionDirective } from '../permission.directive';

@Component({
  selector: 'app-permission',
  imports: [PermissionDirective],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {

}
