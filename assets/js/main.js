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

const button_prev =document.querySelector('#prev');

button_prev.addEventListener('click',cambiaImagen);

const button_next =document.querySelector('#next');

button_next.addEventListener('click',cambiaImagen);
    








