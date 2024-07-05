const sum = require('../Tasks/sum');

test('sum function should return the sum of two numbers', () => {
    expect(sum(10, 5)).toBe(15);
    expect(sum(3, 7)).toBe(10);
    expect(sum(-5, 5)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-3, -7)).toBe(-10);
    expect(sum(1000, 5000)).toBe(6000);
});
