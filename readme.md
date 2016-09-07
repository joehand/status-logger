
# Status Logger

Send groups of messages, update the messages, and print them to stdout via [ansi-diff-stream](https://github.com/mafintosh/ansi-diff-stream).

Each message group is an array of lines to print. Lines and groups can be updated and printed. Groups are printed in order with a line in between them.

## Example

```js
var outputLines = []
var log = statusLogger([outputLines])
setInterval(function () {
  log.print()
}, 100)

var sec = 0
outputLines.push('I am starting.')
setInterval(function () {
  sec++
  outputLines[1] = 'I am progressing & overwriting this line. Seconds = ' + sec
}, 1000)
```

See `example.js` for full example with multiple message groups.

## Installation

```
npm install status-logger
```

## API

### `var log = statusLogger(messageGroups, opts)`

`messageGroups` is an array groups with of lines to print. They will be printed in order.

### Options

* `quiet`: do not print anything
* `debug`: print everything to console.log or console.error

### `log.print()`: print messages from all groups

### `log.groups`: array of message groups


## License

MIT