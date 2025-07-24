import { MinutesToHoursConverterPipe } from './minutes-to-hours-converter.pipe';

describe('MinutesToHoursConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToHoursConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
