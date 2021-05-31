# readable-num

Readable num is a simple npm package that turns numbers into easy to read words.

## Usage

```js
const { readableNum } = require("readable-num");
readableNum(number);
```

### Parameters

- num (required) - the number to process into a readable string
- minNum (default: 9999) – the minimum number required to return a string
