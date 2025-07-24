import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHoursConverter',
  standalone: true
})
export class MinutesToHoursConverterPipe implements PipeTransform {

  transform(totalMinutes: number): string {
    if (isNaN(totalMinutes) || totalMinutes < 0) {
      return '';
    }

    if (totalMinutes >= 1440) {
      return 'Diaria';
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
      return `${minutes} Min`;
    } else if (minutes === 0) {
      return `${hours} Hrs`;
    } else {
      return `${hours} Hrs ${minutes} Min`;
    }
  }

}
