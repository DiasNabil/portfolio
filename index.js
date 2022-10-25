const navButton = document.querySelector('.nav-toggler')
const anchor = document.querySelectorAll('.anchor')
const nav = document.querySelector('nav')


// eventlistener sur le button et les encres pour animation Toggler

navButton.addEventListener('click', toggleNav)

anchor[0].addEventListener('click', toggleNav)
anchor[1].addEventListener('click', toggleNav)
anchor[2].addEventListener('click', toggleNav)


// fonction Toggle du boutton de navigation

function toggleNav() {
    navButton.classList.toggle('active')
    nav.classList.toggle('active')
}