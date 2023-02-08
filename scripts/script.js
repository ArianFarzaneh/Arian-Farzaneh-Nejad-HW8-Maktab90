//q3
'use strict'
//estefade az Closures
function counterMaker()
{
    let counter=0
    return function(number=0)
    {
        counter=counter+number
        return counter
    }
}
const counter = counterMaker()       
console.log( counter() ) // 0           
console.log( counter() ) // 0
console.log( counter(1) ) // 1
console.log( counter() ) // 1
console.log( counter(3) ) // 4
console.log( counter(7) ) // 11
console.log( counter(-5) ) // 6