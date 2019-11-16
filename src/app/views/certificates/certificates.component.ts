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

  certificateTemplate() {
    const markup = `
    <div class="d-none" id="teste">
      <h1>Certifcado</h1>
      <p> Certificamos para os devidos fins que {{ fulano }} conclui com sucesso o curso de {{atdtast}}, no dia {{tal}}. </p>
    </div>
    `;

    document.querySelector('.certificate').append(markup);
  }

  teste(){
    // parentdiv is the html element which has to be converted to PDF
    html2canvas(document.querySelector("#teste")).then(canvas => {

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);
      pdf.save('converteddoc.pdf');

    });
  }

}
