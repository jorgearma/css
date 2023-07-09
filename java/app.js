const menu = document.querySelector('.nav__menu');
const menulist = document.querySelector('.nav__list')
const links = document.querySelectorAll('.nav__link')

menu.addEventListener('click', (e) => {
    menulist.classList.toggle('nav__list--show')

});

links.forEach((link) => {
    link.addEventListener('click',() =>{
        menulist.classList.remove('nav__list--show');
    })
})

const botn2 = document.querySelector('.hero__cta')

const agregarnuevoboton = () => {
    const nuevaCaja = document.createElement('a')

    const contenedor = document.querySelector('.hero__text')

    nuevaCaja.innerHTML = botn2.innerHTML
    nuevaCaja.innerText = 'que poringaos'
    nuevaCaja.style.background = 'red'
    nuevaCaja.setAttribute('class' , botn2.getAttribute('class'))

    contenedor.appendChild(nuevaCaja)
    console.log(nuevaCaja.classList);

}

agregarnuevoboton()

const elimanarboton = () => {
    const botonaeliminar = document.querySelector('.hero__cta')

    botonaeliminar.r
}
