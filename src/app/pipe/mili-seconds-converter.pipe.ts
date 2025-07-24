import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miliSecondsConverter',
  standalone: true
})
export class MiliSecondsConverterPipe implements PipeTransform {

  transform(milliseconds: number): string {
    if (isNaN(milliseconds) || milliseconds < 0) {
      return '';
    }

    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format 'MM:SSs'
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}s`;
  }
}
