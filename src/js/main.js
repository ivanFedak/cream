
import spoller from './modules/spoller';
import slider from './modules/slider';

import def from './services/default';
import burger from './modules/burger';
import timer from './modules/timer';
import sliderSettings from './modules/swiperSettings'




window.onload = function (){
    def();
    burger();

    spoller();
    timer();
    sliderSettings();
    slider();
}