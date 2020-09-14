import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/service/api.service';
import { Chart } from 'node_modules/chart.js'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0,'border-radius': 0 }), 
        animate(500, style({opacity: 1,'border-radius': 5}))
      ]) 
    ])
  ]
})
export class HomeComponent implements OnInit {

  private logs:any[] = []
  constructor(private api:APIService,private message:MessageService) { }

  ngOnInit(): void {
    this.api.GetLogs().subscribe(x => {
      x.data.forEach(items => {
        this.logs.push(items)
      });
    }, err => {
        console.log(err)
    })
    this.loadChart()
    this.message.Notify("Data Loaded!")
  }


  loadChart() {
    var canvas: any = document.getElementById("Chart");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var chartBig = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientFill,
          borderColor: '#e44cc4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#e44cc4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#be55ed',
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [180, 60, 200, 160, 250, 280, 10, 190, 200, 250, 290, 320]
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#ccc',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,0,0,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 350,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,0,0,0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }]
        }
      }
    });
  }
}
