import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToClock'
})
export class SecondsToClockPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  private static pad(value: number): string {
    return (value < 10) ? `0${value}` : `${value}`;
  }

  public static transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }


}
