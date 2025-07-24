import { SubtractFiveHoursPipe } from './subtract-five-hours.pipe';

describe('SubtractFiveHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new SubtractFiveHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
