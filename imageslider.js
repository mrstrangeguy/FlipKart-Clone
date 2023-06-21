const slidecontainer=document.querySelector('.slides')
const slides=Array.from(slidecontainer.children)

const nextButton=document.querySelector('.right-button')
const prevButton=document.querySelector('.left-button')

const slideSize=slides[0].getBoundingClientRect()
const slideWidth=slideSize.width
console.log(slideWidth)
console.log("Image SLider")
//arrange slides one to each other
// slides[0].style.left=slideWidth * 0 + 'px'
// slides[1].style.left=slideWidth * 1 + 'px'
// slides[2].style.left=slideWidth * 2 + 'px'
// slides[3].style.left=slideWidth * 3 + 'px'

// slides.forEach((slide,index)=>{
//     slide.style.left=slideWidth*index + 'px'
// })

const setSlidePosition=(slide,index)=>{
    slide.style.left=slideWidth*index+'px'
}
slides.forEach(setSlidePosition)
window.setInterval(function(){
    const currentSlide=slidecontainer.querySelector('.current-slide')
    const nextSlide=currentSlide.nextElementSibling
    const prevSlide=currentSlide.previousElementSibling

    
    if(currentSlide===slides[3]){
        moveToSlide(slidecontainer,currentSlide,prevSlide)
    }
    else {
       
            moveToSlide(slidecontainer,currentSlide,nextSlide)

    }
  
},5000)
const moveToSlide=(slidecontainer,currentSlide,targetSlide)=>{
    slidecontainer.style.transform = 'translateX(-'+targetSlide.style.left+')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}
//move slides to the left when clicked
prevButton.addEventListener('click',e =>{
    const currentSlide=slidecontainer.querySelector('.current-slide')
    const prevSlide=currentSlide.previousElementSibling

    moveToSlide(slidecontainer,currentSlide,prevSlide)
})

//move slides to the right when clicked
nextButton.addEventListener('click',e=>{
    
    const currentSlide=slidecontainer.querySelector('.current-slide')
    const nextSlide=currentSlide.nextElementSibling
    const amountToMove=nextSlide.style.left
    //move to the next slide
    moveToSlide(slidecontainer,currentSlide,nextSlide)
    // console.log(amountToMove)
    // slidecontainer.style.transform = 'translateX(-'+amountToMove+')'
    // currentSlide.classList.remove('current-slide')
    // nextSlide.classList.add('current-slide')
})

