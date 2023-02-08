'use strict'
let user={}
function setterGenerator(key){
    return function(value){
        //this inja be object eshare mikonad chon dar .call() user ra pass dadim
        this[key]=value;
        return this;
    }
}
let nameSetter=setterGenerator("name")//key ra pass midehad
nameSetter.call(user,'john')//user ra be onvan object va john ra be onvan value ra pas s  midehad
console.log(user);