const btn = document.getElementById('button')

const user = document.getElementById('usuario')
const password = document.getElementById('senha')

function change(){
    if(user.value >= 1 && password.value >= 1);{
        btn.style.border = '2px solid #fff'
    } 
}

