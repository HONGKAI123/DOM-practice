// // var event1 = document.querySelector('h1');
// // event1.addEventListener("click",(e)=>{
// //     console.log(e)
// // })

// // var message = document.getElementById('i1')
// // var result = document.querySelector('h1')

// // message.addEventListener('keyup',()=>{
// //     result.innerText = "hello" +message.value;
// // })
// // result.innerHTML = "hello" + message;

// const mylistener = (type, callbacks) =>{ //这里callbacks是一个function
//     //when type trigger
//     let event1 = {
//         eventtype : 'keypress',
//         time :'3s',
//         why :'press on keyboard'

//     }
//     if(event1.eventtype == type){
//       callbacks(event1); //等于下面的gete（e）
//     }
    
// }
// mylistener('keypress', function gete(e){  
//     console.log(e);
// })

// // document.addEventListener('keydown',resy); // 传外面的function不需要（）

// // function resy(e){
// //    alert('i got press')
// // }

// const callbacks = (n) =>{
//    return n%2==0;
// }

// let printcall = (func, num) =>{

//     isnumbereven = func(num);  // = callbacks(n)  在这里func 等于整个callbacks function
//     console.log(`the number ${num} is even number is ${isnumbereven}` ) 


// }
// printcall(callbacks,3)

// function add (n,m){
//     return n+m;

// }
// function high(a,b,addresult){
//     console.log(addresult(a,b))  //addresult 就等于上面的add 
// }
// high(3,4,add)
function printString(callbackHof, callback_only, str) {
    str +=' concated first';   // str = anything +'concated first' 
   callbackHof( callback_only,str);
 }
 
 function concatFirst(callback_only, stk)  //str = stk
 {
   callback_only(stk);    //这里的input = concatagain（sk）结果为 ‘contated again’
 }
 
 function concatAgain(sk)
 {
    sk += ' contated again';
   console.log(sk);
 }
//  concatFirst(concatAgain,"aaa")

 printString(concatFirst, concatAgain, 'anything');
 
