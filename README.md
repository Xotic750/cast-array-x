<a
  href="https://travis-ci.org/Xotic750/cast-array-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/cast-array-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/cast-array-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/cast-array-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/cast-array-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/cast-array-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/cast-array-x"
  title="npm version">
<img src="https://badge.fury.io/js/cast-array-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/cast-array-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/cast-array-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/cast-array-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/cast-array-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/cast-array-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/cast-array-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_cast-array-x"></a>

## cast-array-x

Casts value as an array if it's not one.

<a name="exp_module_cast-array-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

Casts value as an array if it's not one.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.

| Param   | Type            | Description           |
| ------- | --------------- | --------------------- |
| [value] | <code>\*</code> | The value to inspect. |

**Example**

```js
import castArray from 'cast-array-x';

console.log(castArray(1)); // [1]
console.log(castArray({a: 1})); // [{ 'a': 1 }]
console.log(castArray('abc')); // ['abc']
console.log(castArray(null)); // [null]
console.log(castArray(undefined)); // [undefined]
console.log(castArray()); // []
console.log(castArray([1, 2, 3])); // [1, 2, 3]
```
