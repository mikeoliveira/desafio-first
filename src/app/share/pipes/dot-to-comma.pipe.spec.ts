import { DotToCommaPipe } from '../pipes/dot-to-comma.pipe';

describe('DotToCommaPipe', () => {
  it('create an instance', () => {
    const pipe = new DotToCommaPipe();
    expect(pipe).toBeTruthy();
  });
});
