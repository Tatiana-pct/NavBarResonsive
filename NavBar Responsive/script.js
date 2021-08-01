const liste = document.querySelector('.liste');
const bntResponsive = document.querySelector('.btn-responsive');

bntResponsive.addEventListener('click', () => {

    liste.classList.toggle('show');
})

window.addEventListener('resize', () =>{

    if(window.innerWidth > 650){
        liste.classList.remove('show');
    }

})
