// let btnMenu = document.getElementById('btn-menu') /**/
// let menu = document.getElementById('menu-mobile') /**/
// let overlayMenu = document.getElementById('overlay-menu')  /**/

// btnMenu.addEventListener('click', () => {   /**/
//     menu.classList.add('abrir-menu')
// })

// menu.addEventListener('click', () => {    /**/
//     menu.classList.remove('abrir-menu')
// })
// overlayMenu.addEventListener('click', () => {   /**/
//     menuMobile.classList.remove('abrir-menu')
// })

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})