var statusLogger = require('.')

var messages = []
var progressLines = []
var log = statusLogger([messages, progressLines])
setInterval(function () {
  log.print()
}, 100)

// Messages are one-time things I don't plan to overwrite
messages.push(`msg #${messages.length}: We are starting this. Let us send a message`)

// Progress lines I will overwrite more. There are only a few and I want to track them.
progressLines[0] = '' // spacer
progressLines[1] = 'progress line 1. I will not change until we finish.'
progressLines[2] = 'progress line 2. I will change at half way.'

var percentage = 0
progressLines[3] = 'Percentage ' + percentage + '%'

// update percentage & will print updated info with interval
var it = setInterval(function () {
  percentage += 1
  if (!(percentage % 10)) messages.push(`msg #${messages.length}: This message will print sometimes. % is ${percentage}`)
  if (percentage === 50) progressLines[2] = 'We got halfway'
  progressLines[3] = 'Percentage ' + percentage + '%'

  if (percentage === 100) {
    clearInterval(it)
    progressLines = log.groups[1] = ['\n', 'We finished so I will reset the progress lines.']
    idle()
  }
}, 100)

function idle () {
  setTimeout(function () {
    progressLines[0] = 'This has been idle for 2 seconds. Clearing messages.'
    log.groups[0] = []
    beforeExit()
  }, 2000)
}

function beforeExit () {
  setTimeout(function () {
    progressLines[0] = 'About to exit. I want to make sure to print this immediately.'
    log.print()
    process.exit(0)
  }, 2000)
}
