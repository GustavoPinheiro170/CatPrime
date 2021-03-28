import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showFiller = false;

  showMenu() {
    if (this.showFiller) {
      return this.showFiller = false
    }else {
      return this.showFiller = true
    }
  }

  ngOnInit(): void {
  }

}
