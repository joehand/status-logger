
# Status Logger

Log a progress status while also queuing messages. 

* Messages are added to queue and printed above status lines.
* Status can be multi-line, specify line with each message.


## Usage

```
var statusLogger = require('status-logger')

var log = statusLogger(opts)

log.message('Send a regular console log message') // queue message for next interval

log.status('Print to stdout line 0', 0) // print to stdout line 0 in next interval
log.status('Print to stdout line 1', 1)

var percentage = 0
log.status('Percentage' + percentage, 2)

// update percentage & will print updated info with interval

log.status('Last line', -1) // print to last status line
log.status('Overwrite line 1', 1)
```

### `log.message(msg)`: log a message

### `log.status(msg, lineNum)`: print to stdout line

## Options

* `logspeed`: interval for printing
* `quiet`: do not print anything
* `debug`: print everything to console.log or console.error
