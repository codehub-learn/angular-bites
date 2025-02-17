import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {
  private tmplref = inject(TemplateRef);
  private vc = inject(ViewContainerRef);

  appPermission = input<string[]>([]);
  private userRole = 'admin';

  ngOnInit() {
    if (this.appPermission().includes(this.userRole)) {
      this.vc.createEmbeddedView(this.tmplref);
    } else {
      this.vc.clear();
    }
  }

}
