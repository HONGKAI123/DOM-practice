for( var i = 0; i < document.querySelectorAll(".drum").length;i++)
{
   document.querySelectorAll('.drum')[i].addEventListener("click", function(){
     console.log(this.style.color = 'white')    //this 可以用来检测哪个按键被按了 this.innerHTML可以显示HTML字符
   })  //未完成： 使用不同的switch statement来完成每个按键不同的音乐
}

// var audio = new Audio('./sounds/crash.mp3');
//       audio.play();





// document.querySelector('button').addEventListener('click', handclick)  给所有第一个按钮加alert

// function handclick(){
   
//   alert('hey fuck you usj')
// }

// const click = document.querySelector('button')
// click.addEventListener('click', function (){
//    alert('hey fuck you usj')
//   }) 