import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createLineChart1();
    this.createLineChart2();
    this.createLineChart3();
  }

  createLineChart1(): void {
    const ctx = document.getElementById('lineChart1') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Jackets been sold over 2023',
          data: [50, 59, 60, 65, 69, 90, 90, 82, 75, 60, 55, 80],
          borderColor: 'rgb(249, 104, 21)',
          tension: 0.1
        }]
      }
    });
  }

  createLineChart2(): void {
    const ctx = document.getElementById('lineChart2') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Collars been sold over 2023',
          data: [50, 59, 60, 62, 63, 55, 60, 60, 80, 50, 55, 52],
          borderColor: 'rgb(175, 111, 9)' ,
          tension: 0.1
        }]
      }
    });
  }

  createLineChart3(): void {
    const ctx = document.getElementById('lineChart3') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Toys been sold over 2023',
          data: [62, 65, 60, 65, 69, 70, 75, 63, 68, 60, 55, 80],
          borderColor: 'rgb(44, 56, 99)',
          tension: 0.1
        }]
      }
    });
  }
}
