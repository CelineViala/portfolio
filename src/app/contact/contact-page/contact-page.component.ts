import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  scrollToBottom(elm:any){
    elm.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
