let log ={
    info : function(info){
        console.log(`Info: ${info}`)
    },
    warn : function(warn){
        console.log(`warn: ${warn}`)
    },
    error : function(error){
        console.log(`error: ${error}`)
    },

}


let anotherlog ={
    info : function(info){
        console.log(`Info: ${info}`)
    },
    warn : function(warn){
        console.log(`warn: ${warn}`)
    },
    error : function(error){
        console.log(`error: ${error}`)
    },

}
console.log(`module.exports: ${module.exports}`)
console.log(`module.exports: `,module.exports)

module.exports={log,anotherlog}
//module.exports="Akshat" -- whatever written at last is exported
module.exports.display=function(){
    
}
console.log(`module.exports: `,module.exports)