import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  collapsed:boolean = true

  ScrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
