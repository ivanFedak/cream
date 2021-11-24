
import spoller from './libs/spoller';
import slider from './libs/slider';

import def from './services/default';
import burger from './modules/burger';
import timer from './modules/timer'





window.onload = function (){
    def();
    burger();

    spoller();
    timer();
    // slider();
}