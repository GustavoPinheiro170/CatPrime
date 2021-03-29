import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

interface Login {
  login?: string,
  senha?: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  user: string = '';
  pass: string = '';
  error: boolean = false;

  constructor(
      private service: AuthService,
      private navigate: Router) { }
  
  ngOnInit(): void {
  }


  submitForm() {
    this.service.login().subscribe((item: any) =>  {
      item.map((user: Login) =>  {
        if(user.login === this.user && user.senha === this.pass) {
          this.error = false;
          this.navigate.navigate([''], {  })
          this.service.userLogin = this.user
         }else {
          this.error = true;
        }
      })
    })
  }

}
