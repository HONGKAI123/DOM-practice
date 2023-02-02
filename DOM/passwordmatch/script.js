let pass1 = document.getElementById('ps1');
let pass2 = document.getElementById('ps2');
let result = document.querySelector('h1')

function checkpassword(){
    result.innerText = pass1.value === pass2.value ? 'matched' :'not matched'
}

pass1.addEventListener('keyup', ()=>{
    
    if(pass2.value.length !==0){
        checkpassword()

    }

})

pass2.addEventListener('keyup',checkpassword)