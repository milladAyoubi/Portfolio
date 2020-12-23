const menu = (toggle,ID) => {
    const togg = document.getElementById(toggle)
    const nav = document.getElementById(ID)


    if(togg && nav) {
        togg.addEventListener('click', () => {
            nav.classList.toggle('show')
            console.log('Complete')
        })
    }

}

menu('navMenuBar','navMenu')