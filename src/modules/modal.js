function openModal (modalSelector, modelTimerId){
    const modal = document.querySelector(modalSelector)
    modal.classList.add('show')
    modal.classList.remove('hide')
    if(modelTimerId){
        clearTimeout(modelTimerId)
    }
}
function closeModal (modalSelector){
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
}
function modal(triggerSelector, modalSelector, modelTimerId){
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector)
    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modelTimerId))
    })
    modal.addEventListener('click', (event) => {
        if(event.target == modal || event.target.getAttribute('data-close') == ''){
            closeModal(modalSelector)
        }
    })
    window.addEventListener('keydown', (event) => {
        if(event.which == 27 && modal.classList.contains('show')){
            closeModal(modalSelector)
        }
    })

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight){
            openModal(modalSelector, modelTimerId)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
    window.addEventListener('scroll', showModalByScroll)


}

export default modal
export {openModal, closeModal}