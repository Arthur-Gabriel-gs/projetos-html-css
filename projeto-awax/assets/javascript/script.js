window.onload = function(){
    document.querySelector('.menu-opener').addEventListener('click', function(){
        if(document.querySelector('#menu-area').style.display == ''){
            document.querySelector('#menu-area ul').style.display = 'flex'
            document.querySelector('#menu-area').style.display = 'flex';
        }else{
            document.querySelector('#menu-area ul').style.display = 'flex';
            document.querySelector('#menu-area').style.display = '';
        }
    })
}