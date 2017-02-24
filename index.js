var differ = require('ansi-diff-stream')

module.exports = function (messageGroups, opts) {
  if (!messageGroups || !Array.isArray(messageGroups)) return new Error('Message list required')
  if (!Array.isArray(messageGroups[0])) messageGroups = [messageGroups]
  if (!opts) opts = {}

  var diff = differ()
  if (!opts.debug && !opts.quiet) diff.pipe(process.stdout)

  return {
    diff: diff,
    groups: messageGroups,
    print: function () {
      var flattened = messageGroups.reduce(function (a, b) {
        return a.concat(b)
      }, [])
      var msg = flattened.join('\n')
      if (opts.debug) console.log(msg)
      else if (!opts.quiet) diff.write(msg)
    }
  }
}
