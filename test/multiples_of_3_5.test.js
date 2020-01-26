const expect = require('expect');
const multiples_of_3_5 = require('../multiples_of_3_5');

it('should return all multiples of three and five', function() {
    var res = multiples_of_3_5.threesFives(9);
    expect(res).toBe(23);
});

it('should return all multiples of three and five', function() {
    var res = multiples_of_3_5.threesFives(999);
    expect(res).toBe(233168);
});