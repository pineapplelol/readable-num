# readable-num

A simple npm package that turns numbers into easy to read words.

## Usage

```js
const { readableNum } = require("readable-num");

const number = 67567654;

readableNum(number); // 67.6 million
readableNum(number, { minNum: 999999999 }); // 67567654
readableNum(number, { precision: 2 }); // 68 million
readableNum(number, { minNum: 100, precision: 2 }); // 68 million
```

### Parameters

- `num` (required) - the number to process into a readable string
- `config` (optional): options for the function
  - `minNum`: the smallest number that will be converted into a readable string (default: 9999)
  - `precision`: the number of significant digits that will be used for the readable string (default: 3)
  - `allowDecimal`: whether or not the number in the readable number can have a decimal or not (default: false)
