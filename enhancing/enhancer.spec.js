const {
    repair,
    succeed,
    fail,
} = require('./enhancer.js');

// test away!
describe('enhancer()', () => {
    it('repair() item durability should be 100', () => {
        expect(repair('sword').durability).toBe(100)
    })

    it('succeed(item) enhancement that succeeds', () => {
        expect(succeed('sword').enhancement).toBeGreaterThan(10)
    });

    it('fail(item) enhancement that fails', () => {
        expect(fail('sword').enhancement).toBeLessThan(11)
    });


    it.todo('get()');
});
