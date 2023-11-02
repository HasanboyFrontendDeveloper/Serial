function slider({container, slide, nexArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    // Slider
    const slides = document.querySelectorAll(container),
        next = document.querySelector(nexArrow),
        prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        slider = document.querySelector(slide)
        
        let slideIndex = 1
        let offset = 0
        let width = window.getComputedStyle(slidesWrapper).width

    // --*********************************************************************--
    //                        CAROUSEL SLIDER
    // --**********************************************************************--
    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = 'all 1s ease'
    slidesWrapper.style.width = width
    slidesWrapper.style.overflow = "hidden"

    
    width = Math.floor(width.replace(/\D/g, ''))
    if(width > 99999){
        width /= 10
    }
    if(width > 9999){
        width /= 10
    }

    console.log(width);

    if(slides.length < 10){
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    }else{
        total.textContent = slides.length
        current.textContent = slideIndex
    }


    next.addEventListener('click', () => {
        if(offset == width * (slides.length -1)){
            offset = 0
            slideIndex = 1
        }else{
            offset += width
            slideIndex++
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`
        }else{
            current.textContent = slideIndex
        }
        dots.forEach(dot => dot.style.opacity = .5)
        dots[slideIndex -1].style.opacity = 1
    })
    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = width * (slides.length -1)
            slideIndex = slides.length
        }else if(offset == 4.547473508864641e-13){
            offset = width * (slides.length -1)
            slideIndex = slides.length
        }else{
            offset -= width
            slideIndex--
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`
        }else{
            current.textContent = slideIndex
        }

        dots.forEach(dot => dot.style.opacity = .5)
        dots[slideIndex -1].style.opacity = 1
    })

    const indicators = document.createElement('ol')
    const dots = []
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('carousel-dot')
        if(i == 0) {dot.style.opacity = 1}
        indicators.append(dot)
        dots.push(dot)
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo
            offset = width * (slideTo -1)
            slidesField.style.transform = `translateX(-${offset}px)`

            dots.forEach(dot => dot.style.opacity = .5)
            dots[slideIndex -1].style.opacity = 1

            if(slides.length < 10){
                current.textContent = `0${slideIndex}`
            }else{
                current.textContent = slideIndex
            }
        })
    })

    setInterval(() => {
        if(offset == width * (slides.length -1)){
            offset = 0
            slideIndex = 1
        }else{
            offset += width
            slideIndex++
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        dots.forEach(dot => dot.style.opacity = .5)
        dots[slideIndex -1].style.opacity = 1

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`
        }else{
            current.textContent = slideIndex
        }
    }, 5000)
}
export default slider