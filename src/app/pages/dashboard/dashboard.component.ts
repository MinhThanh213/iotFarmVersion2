import { Component, OnInit } from '@angular/core';
import { sensor } from 'src/app/Utils/sensor.model';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sensor!: sensor[];
  currentTab = 'tab1'; // Khởi tạo tab đầu tiên

  constructor(private service : ApiServiceService){}

  ngOnInit(): void {
    this.getAllSensors();
    
  }

  getAllSensors(){
    this.service.getAllSensors().subscribe((e) => {
      this.sensor = e
      console.log(e);
      
    })
  };

  changeTab(tab: string) {
    this.currentTab = tab;
  };  
}
