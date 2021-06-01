# readable-num

Readable num is a simple npm package that turns numbers into easy to read words.

## Usage

```js
const { readableNum } = require("readable-num");
readableNum(number);
```

### Parameters

- num (required) - the number to process into a readable string
- config (optional): options for the function
  - minNum: the smallest number that will be converted into a readable string (default: 9999)
  - precision: the number of significant digits that will be used for the readable string (default: 3)

## Example

Check out the [test file](https://github.com/pineapplelol/readable-num/blob/master/test/index.test.js) to see examples.
