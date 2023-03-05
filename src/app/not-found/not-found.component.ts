import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
   @Input() visible: boolean = false;
   @Input() notFoundMessage: string ="Nothing found!";
   @Input() resetLinkText: string = "Reset";
   @Input() resetLinkRoute:string = "/";
}
