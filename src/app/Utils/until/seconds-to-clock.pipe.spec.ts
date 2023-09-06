import { SecondsToClockPipe } from './seconds-to-clock.pipe';

describe('SecondsToClockPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToClockPipe();
    expect(pipe).toBeTruthy();
  });
});
