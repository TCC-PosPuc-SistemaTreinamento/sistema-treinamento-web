import { Component, OnInit } from '@angular/core';

import { EnrollService } from '../../services/enroll.service';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  loading: Boolean = false;
  certificates: any[];
  
  constructor(private enrollService: EnrollService,
    private securityService: SecurityService) { }

  async ngOnInit() {
    this.loading = true;
    const loggedUser = this.securityService.getUser();
    if(loggedUser){
      this.certificates = await this.enrollService.getCertificates(loggedUser.id);
      console.log(this.certificates)
    }
    
    this.loading = false;
  }

}
