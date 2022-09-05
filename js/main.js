const container = document.querySelector('#container');

document.querySelector('#button-menu').addEventListener('click', () => {
    container.classList.toggle('active');

});

const checkwidht = () => {
    if(window.innerWidth <= 768){
        container.classList.remove('active');
    }
    else{
        container.classList.add('active');
    }
}

checkwidht();

window.addEventListener('resize', () =>{
    checkwidht();

});