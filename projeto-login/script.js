const container = document.querySelector('#container')

const  moveOverlay = () => container.classList.toggle('move')


document.querySelector('#open-register').addEventListener('click', moveOverlay)

document.querySelector('#open-login').addEventListener('click', moveOverlay)