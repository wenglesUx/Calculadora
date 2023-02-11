

function insert(x){
 const number = document.querySelector('#screen').innerHTML ;
 document.querySelector('#screen').innerHTML = number + x;
}

 let c = document.querySelector('#c')
 c.addEventListener('click',clear)
 function clear(){
    document.querySelector('#screen').innerHTML = ""
 }

 let back = document.querySelector('#back');
back.addEventListener('click',()=>{

        var resultado = document.querySelector('#screen').innerHTML;
        document.querySelector('#screen').innerHTML = resultado.substring(0,resultado.length -1)
})
let equal  = document.querySelector('#igu')
equal.addEventListener('click',()=>{
    var resultado =  document.querySelector('#screen').innerHTML;
    if(resultado){
        document.querySelector('#screen').innerHTML = eval(resultado)
    } else{
        document.querySelector('#screen').innerHTML = "nada para calcular"
    }
})