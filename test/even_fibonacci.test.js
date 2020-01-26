const expect = require('expect');
const testFile = require('../even_fibonacci');

it('should return the sum of all even numbers in fibonacci sequence', function() {
    var res = testFile.fibonacci();
    expect(res).toBe(4613732);
});