var differ = require('ansi-diff-stream')

module.exports = function (messageGroups, opts) {
  if (!messageGroups || !Array.isArray(messageGroups)) return new Error('Message list required')
  if (!Array.isArray(messageGroups[0])) messageGroups = [messageGroups]
  if (!opts) opts = {}

  var diff = differ()
  if (!opts.debug && !opts.quiet) diff.pipe(process.stdout)

  return {
    groups: messageGroups,
    print: function () {
      var msg = ''
      var prevGroup = false
      messageGroups.forEach(function (messages) {
        if (!messages.length) return
        if (prevGroup) msg += '\n'
        msg += messages.join('\n')
        prevGroup = true
      })
      if (opts.debug) console.log(msg)
      else if (!opts.quiet) diff.write(msg)
    }
  }
}
