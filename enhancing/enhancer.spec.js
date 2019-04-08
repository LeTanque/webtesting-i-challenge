const {
    repair,
    succeed,
    fail,
} = require('./enhancer.js');

let sword = {
    item:'sword',
    durability:64,
    enhancement:9
}

// test away!
describe('enhancer()', () => {
    it('repair() item durability should be 100', () => {
        expect(repair(sword).durability).toBe(100)
    })

    it('succeed(item) enhancement that succeeds', () => {
        expect(succeed(sword).enhancement).toBeGreaterThan(sword.enhancement)
    });

    it('fail(item) enhancement that fails', () => {
        expect(fail(sword).enhancement).toBeLessThan(sword.enhancement)
    });

    it.todo('get()');
});
