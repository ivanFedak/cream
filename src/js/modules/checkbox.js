const checkBox = ()=>{
    const checkBox = document.querySelectorAll('.buy-component__checkbox');

    checkBox.forEach(item=>{
        const input = item.querySelector('input');
        if(input.checked == true){
            item.classList.add('_active');
        }

        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                input.checked = false;
                console.log(1);
            }
            else{
                input.checked = true;
                console.log(2);
            }
            item.classList.toggle('_active');
        });
        
    });


    const checkBox2 = document.querySelectorAll('.where-component__checkbox');

    checkBox2.forEach(item=>{
        const input = item.querySelector('input')
        if(input.checked == true){
            item.classList.add('_active')
        }

        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                input.checked = false
                console.log(1)
            }
            else{
                input.checked = true
                console.log(2)
            }
            item.classList.toggle('_active')
        })
        
    })
    const checkBox3 = document.querySelectorAll('.new-form__checkbox');

    checkBox3.forEach(item=>{
        const input = item.querySelector('input')
        if(input.checked == true){
            item.classList.add('_active')
        }

        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                input.checked = false
                console.log(1)
            }
            else{
                input.checked = true
                console.log(2)
            }
            item.classList.toggle('_active')
        })
        
    })

    // const age = document.querySelector('.age');

    // age.addEventListener('input',function(e){  
    //     if(+age.value > 5){
    //         age.value = 5;
    //     }
    // });
    

}
export default checkBox;