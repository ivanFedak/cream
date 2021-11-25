const sliderSettings = ()=>{
    if(window.innerWidth <= 576){
        document.querySelector('.feedback-expert__slider').classList.add('_swiper')
    }
}
export default sliderSettings;