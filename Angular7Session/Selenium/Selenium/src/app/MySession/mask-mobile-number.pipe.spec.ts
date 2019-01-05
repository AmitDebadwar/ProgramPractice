import { MaskMobileNumberPipe } from './mask-mobile-number.pipe';

describe('MaskMobileNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskMobileNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
