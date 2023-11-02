import {closeModal, openModal} from './modal'
import { postData } from '../server/server'

function form(formSelector, modelTimerId){
    // Form
    const forms = document.querySelectorAll(formSelector)

    const msg = {
        loading: './icons/slider.svg',
        success: "Thank's for submitting our form",
        failure: 'Something went wrong'
    }

    forms.forEach(form => {
        bindPostData(form)
    })

    function bindPostData(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const statusMessage = document.createElement('img')
            statusMessage.src = msg.loading
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form)

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/request', json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success)
                    statusMessage.remove()
                })
                .catch(() => {
                    showThanksModal(msg.failure)
                })
                .finally(() => {
                    form.reset()
                })
        })
    }
    
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')

        prevModalDialog.classList.add('hide')
        openModal('.modal', modelTimerId)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
        <div class="modal__content">
          <div data-close="" class="modal__close">&times;</div>
          <div class="modal__title">${message}</div>
        </div>
        `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal('.modal')
        }, 4000)
    }
}
export default form