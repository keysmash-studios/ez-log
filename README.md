What this?
----------

ez-log is a small module we here at Keysmash use in different projects
to have uniform and easy to make log messages, meaning, using ez-log we
don't have to remake a log function in every single project, which is
very annoying and tedious. It is not really meant to be used outside of
Keysmash projects however feel free to use it, as it is licensed under
GPLv3...

Usage
-----

ez-log exposes multiple functions currently, `log`, `out`, `warn`,
`error`, `status`, `success`...

`log` simply executes the full `log()` function inside the module,
meaning you can manually assign the type, `out` guesses it based on the
prefix (i.e `!!`, `::` etc) and then the rest are explanatory...
Examples are below:

```js
const log = require("ez-log");

log.out("!! TEST")
// prints '!! TEST' with red colors

log.warn("WARNING")
// prints '?? WARNING' with yellow colors

log.log("STATUS", "status")
// prints ':: STATUS' with blue colors
