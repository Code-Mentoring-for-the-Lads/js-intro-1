const multiply = require('../Tasks/multiply');

test('multiply function should return the product of two numbers', () => {
    expect(multiply(6, 7)).toBe(42);
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(3.5, 2)).toBe(7);
    expect(multiply(-3, -3)).toBe(9);
});
