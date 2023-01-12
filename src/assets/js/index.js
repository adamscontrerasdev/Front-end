
window.addEventListener('scroll', ()=>{
    let scrollTop =window.pageYOffset || document.documentElement.scrollTop;
    let carga = document.querySelectorAll('.carga');
    let cargaNum = document.querySelectorAll('.numero');
    let dot = document.querySelectorAll('.dot')
    
    // console.log(scrollTop);
    if(scrollTop >= 2334){
        for(let d of dot){
            d.classList.add('salir')
        }
            for(let carn of cargaNum){
                carn.classList.add('active');
            }
            for(let car of carga){
                car.classList.add('active');
            }
        
    }else{
        for(let d of dot){
            d.classList.remove('salir')
        }
        for(let carn of cargaNum){
                carn.classList.remove('active');
            }
            for(let car of carga){
                car.classList.remove('active');
            }
    }
})




