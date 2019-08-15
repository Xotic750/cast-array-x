import castArray from '../src/cast-array-x';

describe('testSubject', function() {
  it('should wrap non-array items in an array', function() {
    expect.assertions(5);
    expect(castArray(1)).toStrictEqual([1]);
    expect(castArray({a: 1})).toStrictEqual([{a: 1}]);
    expect(castArray('abc')).toStrictEqual(['abc']);
    expect(castArray(null)).toStrictEqual([null]);
    expect(castArray(undefined)).toStrictEqual([undefined]);
  });

  it('should return array values by reference', function() {
    expect.assertions(1);
    const array = [1];
    expect(castArray(array)).toStrictEqual(array);
  });

  it('should return an empty array when no arguments are given', function() {
    expect.assertions(1);
    expect(castArray()).toStrictEqual([]);
  });
});
