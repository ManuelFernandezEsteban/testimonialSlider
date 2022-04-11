const articles = document.querySelectorAll('article');

const cambiaImagen = ()=>{    

    if (articles[0].classList.contains('no-visible')){
        setTimeout(() => {
           articles[0].classList.remove('no-visible');
            articles[1].classList.add('no-visible'); 
        }, 100);
        
    }else{
        setTimeout(() => {
            articles[1].classList.remove('no-visible');
            articles[0].classList.add('no-visible');
        }, 100);
        
    }
}

const button_prev1 =document.querySelector('#prev1');

button_prev1.addEventListener('click',cambiaImagen);

const button_next1 =document.querySelector('#next1');

button_next1.addEventListener('click',cambiaImagen);

const button_prev2 =document.querySelector('#prev2');

button_prev2.addEventListener('click',cambiaImagen);

const button_next2 =document.querySelector('#next2');

button_next2.addEventListener('click',cambiaImagen);
    








