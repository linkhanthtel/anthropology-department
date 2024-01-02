const sum = require('./something')

describe('Sum testing', () => {
    test('Sum is testing', () => {
        expect(sum(4,5)).toBe(9);
    });
});