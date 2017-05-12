import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service'
import { Domain } from '../domain'

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: Domain[];
  errorMessage: any;

  constructor(private domainService: DomainsService) { }

  ngOnInit() {
    this.getAll();
  }

  /**
   * This method display all available domains without restrictions
   */
  getAll() {
    console.info("In DomainsComponent - getAll");
    this.domainService.getAll()
      .subscribe(
      domains => {
        this.domains = domains
        console.trace("no of domains:" + this.domains.length);
      },
      error => {
        console.trace("error: " + error);
        this.errorMessage = error;
      },
      () => {
        console.log("done");
      });
  }


}
