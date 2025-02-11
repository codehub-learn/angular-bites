import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styles: 'h4 { color: var(--hot-red); }'
})
export class ManualComponent {
  private sanitizer = inject(DomSanitizer);
  private link = 'javascript: alert(\'Hello Inspector 🕵️\')'; 
  private title = `<b>Important: </b>Click <a href="${this.link}">here</a> to login!`;
  private url = 'http://youtube.com/embed/watch?v=nQc74wAO94g&list=PL4L5qu9D1p9apoqgrjZpPIG3-j5frkBox&pp=gAQB';

  myTitle = this.sanitizer.bypassSecurityTrustHtml(this.title);
  myLink = this.sanitizer.bypassSecurityTrustUrl(this.link);
  myUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
}
