import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtractFiveHours',
  standalone: true
})
export class SubtractFiveHoursPipe implements PipeTransform {

  transform(value: string | Date | null | undefined): Date | null {
    if (value === null || typeof value === 'undefined') {
      return null;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return null;
    }

    date.setHours(date.getHours() - 5);
    return date;
  }
}
