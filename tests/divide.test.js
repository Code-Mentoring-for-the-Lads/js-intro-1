const divide = require('../Tasks/divide');

test('divide function should return the division of two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(0, 1)).toBe(0);
    expect(divide(1, 3)).toBeCloseTo(0.333, 3);
});

