for( var i = 0; i < document.querySelectorAll(".drum").length;i++)
{
   document.querySelectorAll('.drum')[i].addEventListener("click", function(){
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
   })
}

// document.querySelector('button').addEventListener('click', handclick)  给所有第一个按钮加alert

// function handclick(){
   
//   alert('hey fuck you usj')
// }

// const click = document.querySelector('button')
// click.addEventListener('click', function (){
//    alert('hey fuck you usj')
//   }) 