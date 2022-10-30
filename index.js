const navButton = document.querySelector('.nav-toggler')
const anchor = document.querySelectorAll('.anchor')
const nav = document.querySelector('nav')


//                                                  eventlistener sur le button et les encres pour animation Toggler

navButton.addEventListener('click', toggleNav)

anchor[0].addEventListener('click', toggleNav)
anchor[1].addEventListener('click', toggleNav)
anchor[2].addEventListener('click', toggleNav)


        // fonction Toggle du boutton de navigation

        function toggleNav() {
    navButton.classList.toggle('active')
    nav.classList.toggle('active')
        }


        

//                                                                                 CAROUSEL 


var imgs = document.querySelectorAll('.img')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1


        // Navigation manuelle 

        var manualNav = (manual) => {

            imgs.forEach((img) => {
                img.classList.remove('active')

                btns.forEach((btn => {
                    btn.classList.remove('active')
                }))
                
            })

            imgs[manual].classList.add('active')
            btns[manual].classList.add('active')

        

            
            imgs[manual].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",

            })
        }

        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                manualNav(i);
            
                currentSlide = i;

                

            })
        });

