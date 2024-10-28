// navbar scroll

window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar')
     if(this.window.scrollY>20){
        navbar.classList.add('scrolled')
     }else{
        navbar.classList.remove('scrolled')

     }
})

// animation

const scrollRevealOption = {
    distance:'50px',
    origin:'bottom',
    duration:1000
}

scrollReveal().reveal('.left h1',{
   ...scrollRevealOption,
   delay:500,
})

scrollReveal().reveal('.left p',{
   ...scrollRevealOption,
   delay:1000,
})

scrollReveal().reveal('.main-button',{
   ...scrollRevealOption,
   delay:1500,
})


scrollReveal().reveal('.right img',{
   ...scrollRevealOption,
      origin:'right'
})




scrollReveal().reveal('.top-head',{
   ...scrollRevealOption,
     delay:500,
})