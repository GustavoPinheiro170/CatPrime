import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private login: AuthService) { }

  showFiller = false;

  logged: boolean = false;
  username: string;




  ngOnInit(): void {
    if (this.login.userLogin != undefined) {
      this.logged = true;
      this.username = this.login.userLogin
    }
  
  }

  showMenu() {
    if (this.showFiller) {
       this.showFiller = false
    }else {
       this.showFiller = true
    }

  }



}
