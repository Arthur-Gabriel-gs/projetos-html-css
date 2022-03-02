window.onload = function(){
    document.querySelector('.menu-mobile').addEventListener('click', function(){
        if(document.querySelector('.menu-area').style.display == ''){
            document.querySelector('.menu-area ol').style.display = 'block'
            document.querySelector('.menu-area').style.display = 'block';
        }else{
            document.querySelector('.menu-area ol').style.display = 'flex';
            document.querySelector('.menu-area').style.display = '';
        }
    })
}