console.clear()
const local = require('./modules/2.local')

console.log(local.log)
local.log.info('This is information')
local.log.warn('This is warning')
local.log.error('This is errr')