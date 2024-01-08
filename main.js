var heart=document.getElementById("heart")
console.log(heart)
var increment=document.getElementById("inc")
console.log(increment)
var count=203
var real=true

heart.addEventListener("click",function(){
    if(real==false){
              heart.style.color="black"
                 increment.innerHTML=count
                 real=true
           }
         else{
                heart.style.color="red"
               increment.innerHTML=count+1
               real=false
            }
        })


// function increment(){
   
//     if(real==false){
//                  heart.style.color="black"
//                  increment.innerHTML=a
//                  real=true
//              }
//              else{
//                  heart.style.color="red"
//                  increment.innerHTML=a+1
//                  real=false
//              }

// }
   


