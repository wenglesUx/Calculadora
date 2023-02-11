let equal = document.querySelector('#igu');
let back = document.querySelector('#back');
let c = document.querySelector('#c')

equal.addEventListener('click',calculation)
back.addEventListener('click',erase)
c.addEventListener('click',clear)



function insert(num){
 const number = document.querySelector('#screen').innerHTML ;
 document.querySelector('#screen').innerHTML = number + num;
}


function clear(){
    document.querySelector('#screen').innerHTML = ""
}

function erase(){
        var x = document.querySelector('#screen').innerHTML;
        document.querySelector('#screen').innerHTML = x.substring(0,x.length -1) 
}

function calculation(){
    var x =  document.querySelector('#screen').innerHTML;
    if(x){
        document.querySelector('#screen').innerHTML = eval(x)
    } else{
        document.querySelector('#screen').innerHTML = "empty"
    }
}