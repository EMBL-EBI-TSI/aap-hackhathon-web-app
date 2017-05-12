import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{AuthService} from './auth.service';
import { DomainsComponent } from './domains/domains.component'
import {DomainsService} from './domains.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DomainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService,DomainsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
