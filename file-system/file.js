console.clear()
const fs = require('fs')

// Asynchronous 
fs.readFile("./file-system/sample.txt", function(err,data){
    if(err){
        throw err
    }
    console.log(data.toString())
})

// Synchronous
var data = fs.readFileSync("./file-system/sample.txt","UTF-8")
console.log(data)

// Write. to file

// fs.writeFile("./file-system/test.txt",'Welcome to Fs module',(err,data)=>{
//         if(err){
//             throw err
//         }
//         console.log("Write Operation Completed")
// })
 
// Append file since write file overrides itc
fs.appendFile("./file-system/test.txt",'\n Welcome to Fs module',(err,data)=>{
    if(err){
        throw err
    }
    console.log("Write Operation Completed")
})


// Delete file
fs.unlink("./file-system/test.txt",function(){
    console.log('Delete operation completed.')
})

// Asynchronous hence operation not in order