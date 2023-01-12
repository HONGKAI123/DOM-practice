var randomNumber1 = Math.floor(Math.random()*6 +1);
// console.log(randomNumber1)
var diceimg = 'dice' + randomNumber1;
var imgsrc = './images' + '/'+diceimg+'.png'


document.querySelector('.img1').setAttribute('src', imgsrc)


var randomNumber2 = Math.floor(Math.random()*6 +1);
var diceimg = 'dice' + randomNumber2;
var imgsrc = './images' + '/'+diceimg+'.png'

document.querySelector('.img2').setAttribute('src', imgsrc)

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML= 'player1 wins!!'

}
else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML= 'player2 wins!!'
}
else (document.querySelector('h1').innerHTML= 'nobody wins!!')
