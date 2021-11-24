const burger = ()=>{

       

    const btn = document.querySelector('.icon-menu'),
          btnMenu = document.querySelector('.menu__menu'),
          menu = document.querySelector('.menu__body');


    function menuToggle() {
        btn.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    }


    btn.addEventListener('click',menuToggle)
    btnMenu.addEventListener('click',menuToggle)

    function closeModal(e) {
        const target = e.target;
        if(!target.closest('.menu__body') && !target.closest('.icon-menu') && !target.closest('.menu__menu')){
            btn.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    }

    document.addEventListener('click', closeModal);

}
export default burger;