import { Routes } from '@angular/router';
import { AutoComponent } from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';
import { NoSanitizationComponent } from './no-sanitization/no-sanitization.component';

export const routes: Routes = [
  { path: 'auto', component: AutoComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'no', component: NoSanitizationComponent }
];
