import { Component, OnInit,Renderer} from '@angular/core';
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
  removeMessageListener: Function;
  constructor( private authService:AuthService,
  renderer: Renderer) {
    // We cache the function "listenGlobal" returns, as it's one that allows to cleanly unregister the event listener
    this.removeMessageListener = renderer.listenGlobal('window', 'message', (event: MessageEvent) => {
      if (!this.authService.canAcceptMessage(event)) {
        console.warn("received unacceptable message! Ignoring...", event);
        return;
      }
      this.token = event.data;
      console.log("Received SSO token: "+this.token);
      //this.saveToken(event.data);
      event.source.close();
    });
   }

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

  /**
   * returns sso url
   */
  getSSOURL() {
    this.errorMessage = "";
    console.log("get sso: "+this.authService.getSSOURL());
    return this.authService.getSSOURL();
  }

}
