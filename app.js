const menu = (toggle, ID) => {
    const togg = document.getElementById(toggle)
    const nav = document.getElementById(ID)


    if (togg && nav) {
        togg.addEventListener('click', () => {
            nav.classList.toggle('show')
            console.log('Complete')
        })
    }

}

menu('navMenuBar', 'navMenu')


const navLink = document.querySelectorAll('.navLink')


navLink.forEach(e => e.addEventListener('click', () => {

    navLink.forEach(e => e.classList.remove("selected"))
    e.classList.add("selected")


    const navMenu = document.querySelector('.navMenu')
    navMenu.classList.remove("show")

}))



function swipe(id) {
    var image = document.getElementById(id);
    var url = image.getAttribute('src');
    window.open(url, 'Image', 'width=image.stylewidth,height=image.style.height,resizable=1');
}