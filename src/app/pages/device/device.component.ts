import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/services/openWeather/open-weather.service';
import { interval, Subscription } from 'rxjs';
import { SecondsToClockPipe } from '../../src/pages/until/seconds-to-clock.pipe';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  seconds = 0;
  time : number = 0;
  humidity: number = 0;
  temperature: number = 10;
  tempMax :number = 0;
  tempMin :number = 0;
  oclock:string = '00:00:00';
  remainingTime = 60;
  timeLeft : string = '00:00:00';
  isHiddenA: boolean = true;
  isHiddenB: boolean = false;
  dynamicValueCan: string = '100%';
  dynamicValueWater: string = '100%';
  totalWater: number = 0;
  water:number = 0;

  constructor(private _weatherService: OpenWeatherService) {
  }

  timerSubscriptionStart!: Subscription;
  timerSubscriptionEnd!: Subscription;

  calculater(totalWater:number,water:number){
    this.totalWater = totalWater;
    this.water = water;
    var a = totalWater - water ;
    var persenCan = a / totalWater * 100;
    console.log(persenCan);
    this.dynamicValueCan = "" + persenCan + "%";
    var persenWater = water / totalWater * 100 ;
    console.log(persenWater);
    this.dynamicValueWater = "" + persenWater + "%";
    // this.dynamicValueCan
  }

  startTimer() {
    this.timerSubscriptionStart = interval(1000).subscribe(() => {
      this.seconds++;
      if(this.seconds > 0){
        this.oclock = SecondsToClockPipe.transform(this.seconds);
      }
    });
  }

  stopTimer() {
    if (this.timerSubscriptionStart) {
      this.timerSubscriptionStart.unsubscribe();
    }
  }

  resetTimer() {
    this.seconds = 0;
  }

  ngOnInit(): void {
    this.callApi();
    this.calculater(1000,900);
  }
  callApi() {
    var a = this._weatherService.getWeatherNow().subscribe((a) => {
      console.log(a);
      this.humidity = a.main.humidity;
      this.temperature = a.main.temp;
      this.tempMax = a.main.temp_max;
      this.tempMin = a.main.temp_min;
    });
  }
  toggleDevice() {
    const button = document.getElementById('toggleButton') as HTMLDivElement;
    const p = document.getElementById('light') as HTMLDivElement;
    if (button.classList.contains('on')) {
      button.classList.remove('on');
      button.classList.add('off');
      p.classList.remove('on');
      p.classList.add('off');
      button.textContent = 'Turn On';
      this.isHiddenA = true;
      this.isHiddenB = false;
      // Gửi lệnh để tắt thiết bị (bạn sẽ thêm logic của riêng mình ở đây)
    } else {
      button.classList.remove('off');
      button.classList.add('on');
      p.classList.remove('off');
      p.classList.add('on');
      button.textContent = 'Turn Off';
      this.isHiddenA = false;
      this.isHiddenB = true;
      // Gửi lệnh để bật thiết bị (bạn sẽ thêm logic của riêng mình ở đây)
    }

    document.addEventListener('DOMContentLoaded', () => {
      const button = document.getElementById('toggleButton');
      button?.addEventListener('click', this.toggleDevice);
    });
  }
  startTimerToEnd() {
    var emlementId = document.getElementById("clickStartTime") as HTMLDivElement;
    if (emlementId) {
      emlementId.style.display = "none";
    }
    var emlementIdTtwo = document.getElementById("clickStartTime") as HTMLDivElement;
    if(emlementIdTtwo){
      emlementIdTtwo.style.display = "";
    }
    this.timerSubscriptionEnd = interval(1000).subscribe(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.timerSubscriptionEnd?.unsubscribe(); // Hủy đăng ký khi thời gian còn lại bằng 0
      } else {
        this.timeLeft = SecondsToClockPipe.transform(this.remainingTime);
      }
    });
  }

  stopTimeToEnd() {
    var emlementId = document.getElementById("clickStartTime") as HTMLDivElement;
    if (emlementId) {
      emlementId.style.display = "";
    }
    var emlementIdTtwo = document.getElementById("clickStartTime") as HTMLDivElement;
    if(emlementIdTtwo){
      emlementIdTtwo.style.display = "none";
    }
    clearInterval(this.remainingTime);
  }

  resetTimeToEnd() {
    if (this.timerSubscriptionEnd) {
      this.timerSubscriptionEnd.unsubscribe(); // Hủy đăng ký trước khi đặt lại thời gian còn lại
    }
    this.remainingTime = 60; // Đặt lại thời gian còn lại thành 60 giây
    this.timeLeft = SecondsToClockPipe.transform(this.remainingTime);
  }
  ngOnDestroy() {
    // Đảm bảo rằng đăng ký bị hủy khi component bị hủy
    this.stopTimeToEnd();
  }
}
