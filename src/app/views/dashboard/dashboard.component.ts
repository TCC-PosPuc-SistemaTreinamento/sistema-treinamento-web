import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public consultantTotal: any;
  public consultantData = [];
  public consultantLabel = [];
  public consultantHoverLabel = [];
  public lineChartOptions: any = {
    maintainAspectRatio: false,
    legend: { display: false } 
  };
  public chartColors: any[] = [{
    backgroundColor:['#3566ca', '#990697', '#09951d', '#fe980f', '#db3813','#f0c93e','magenta','gray','pink','black']
  }];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
    //this.seach();
  }

  public teste = [{

  }]

  seach(){
    
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

}
