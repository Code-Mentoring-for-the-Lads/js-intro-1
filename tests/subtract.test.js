const subtract = require('../Tasks/subtract');

test('subtract function should return the difference of two numbers', () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(7, 3)).toBe(4);
    expect(subtract(5, 10)).toBe(-5);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(-3, -7)).toBe(4);
    expect(subtract(1000, 500)).toBe(500);
});
