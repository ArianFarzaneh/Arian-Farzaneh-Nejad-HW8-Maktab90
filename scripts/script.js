//q2
'use strict'

function elemCreator(elem,callback)
{
    elem=document.createElement(elem)
    callback(elem)
    document.body.appendChild(elem)
}
function callback(elem){
    elem.innerHTML="hello world"
    elem.style.backgroundColor = 'red'
    elem.style.color='yellow'
    elem.style.textAlign="center"
    elem.style.width='200px'
    elem.style.height='200px'
    elem.style.position='absolute'
    elem.style.top="50%"
    elem.style.left="50%"
    elem.style.transform="translate(-50%,-50%)"
}
elemCreator('div', callback)