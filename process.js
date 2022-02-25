const http = require ('http')
console.clear()
console.log(process.execPath)
console.log(process.pid)
console.log(process.cwd())
console.log(process.version)
console.log(process.env.USERNAME)
console.log(process.env.USERPROFILE)

const PORT = 3001 //b/w 1000 to 10000
process.env.PORT=PORT
console.log(process.env.PORT)

console.log(http) // Core Module
