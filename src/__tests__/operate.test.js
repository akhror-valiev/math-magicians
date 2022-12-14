import operate from '../logic/operate';

describe('test operate function', () => {
  test('expect 10 + 10 to be "20"', () => {
    expect(operate(10, 10, '+')).toBe('20');
  });
  test('expect 10 - 5 to be "5"', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  test('expect 8 x 8 to be "64"', () => {
    expect(operate(8, 8, 'x')).toBe('64');
  });
  test('expect 7 ÷ 7 to be "1"', () => {
    expect(operate(7, 7, '÷')).toBe('1');
  });
  test('expect 15 ÷ 0 to be "Can\'t divide by 0."', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('expect 100 % 5 to be "0"', () => {
    expect(operate(100, 5, '%')).toBe('0');
  });
  test('expect 16 % 0 to be "Can\'t find modulo as can\'t divide by 0."', () => {
    expect(operate(16, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
