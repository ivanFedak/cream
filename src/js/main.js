
import spoller from './modules/spoller';
import slider from './modules/slider';

import def from './services/default';
import burger from './modules/burger';
import timer from './modules/timer';
import checkBox from './modules/checkbox'
import sliderSettings from './modules/swiperSettings'




window.onload = function (){
    def();
    burger();
    checkBox();
    spoller();
    timer();
    sliderSettings();
    slider();
}