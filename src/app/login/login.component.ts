import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  username: string;
  password:string
  token:string;
  constructor( private authService:AuthService) { }

  ngOnInit() {
    this.username = "";
    this.password = "";
    this.token = "";
  }

  /**
   * Contacts users api for authentication and api returns the token on success
   */
  authenticateUser() {
    console.log("[DomainsComponent]- In the authenticateUser"+this.username);
    this.errorMessage = "";
    if (this.username != null && this.password != null) {
      console.log("In the if condition");
      this.authService.authenticate(this.username, this.password)
        .subscribe(
        token => {
          console.log('[DomainsPage] Obtained token %O', token);
          this.token = token;
        },
        error => {
          this.errorMessage = error.message;
          console.log("error: " + this.errorMessage);
        },
        () => {
          console.log("local authentication done: " + this.username);
        }
        );
    }else{
      console.log("else block");
    }
  }

}
