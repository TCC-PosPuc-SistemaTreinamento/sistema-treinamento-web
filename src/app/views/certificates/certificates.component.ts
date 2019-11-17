import { Component, OnInit } from '@angular/core';

import { EnrollService } from '../../services/enroll.service';
import { SecurityService } from '../../services/security.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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


  generatePDF(i, courseName){

    // parentdiv is the html element which has to be converted to PDF
    html2canvas(document.querySelector(`#certificateTemplate-${i}`)).then(canvas => {

      var pdf = new jsPDF( 'l', 'px', [ parseInt(canvas.style.width, 10) + 170, parseInt(canvas.style.height, 10) + 170 ]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, 0, 0, parseInt(canvas.style.width, 10), parseInt(canvas.style.height, 10) );
      pdf.save(`certificado-${courseName}.pdf`);

    });
  }

}
