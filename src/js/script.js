import clas from '../modules/class'
import form from '../modules/form'
import loader from '../modules/loader'
import modal from '../modules/modal'
import slider from '../modules/slider'
import tab from '../modules/tab'
import timer from '../modules/timer'
import { openModal } from '../modules/modal'

window.document.addEventListener('DOMContentLoaded', ()=> {
    const modelTimerId = setTimeout(() => openModal('.modal', modelTimerId), 5000)

    clas()
    form('form', modelTimerId)
    loader()
    modal('[data-modal]', '.modal', modelTimerId)
    slider({
        container: ".offer__slide",
        nexArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slider',
        field: ".offer__slider-inner",
        wrapper: ".offer__slider-wrapper",
        currentCounter: "#current",
        totalCounter: "#total"
    })
    tab('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer', '2023-11-01')
})