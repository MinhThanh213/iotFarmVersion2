import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chart', { static: true }) chart: ElementRef | undefined;

  ngOnInit(): void {
    this.basicChar();
  }

  basicChar(){
    const element = this.chart?.nativeElement

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 15]
    }]

    const style = {
      margin: { t: 0}
    }

    Plotly.plot(element,data,style)
  }
}
