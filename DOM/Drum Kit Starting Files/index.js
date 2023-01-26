for( var i = 0; i < document.querySelectorAll(".drum").length;i++)
{
   document.querySelectorAll('.drum')[i].addEventListener("click", function(){
     //this 可以用来检测哪个按键被按了 this.innerHTML可以显示HTML字符
     var sound = this.innerHTML;
     switch(sound){
        case "a" :
          var audio = new Audio('./sounds/crash.mp3');
          audio.play();
          break;
        case "w":
          var audio = new Audio('./sounds/kick-bass.mp3');
          audio.play();
          break;
     }
      
   })  //已完成： 使用不同的switch statement来完成每个按键不同的音乐
}
document.addEventListener("keypress",function(e){  //e在这里会打印出被按的按键 

})  //给所有该页面上的东西加event listener

// var audio = new Audio('./sounds/crash.mp3');  //添加音乐
//       audio.play();





// document.querySelector('button').addEventListener('click', handclick)  给所有第一个按钮加alert

// function handclick(){
   
//   alert('hey fuck you usj')
// }

// const click = document.querySelector('button')
// click.addEventListener('click', function (){
//    alert('hey fuck you usj')
//   }) 