import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsConverter',
  standalone: true
})
export class SecondsConverterPipe implements PipeTransform {

  transform(totalSeconds: number): string {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return '';
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format 'MM:SSs'
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}s`;
  }

}
