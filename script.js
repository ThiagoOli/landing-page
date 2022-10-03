const navBar = document.querySelector("nav")
    const logoMenu = document.querySelector(".linkInicio")
    const menuIcon = document.querySelector(".menuIcon")
    const linksContainer = document.querySelector("nav > .links")
    const links = document.querySelectorAll("nav a") 

    let show = false
    menuIcon.onclick = () => {
        show == false ? show = true : show = false
        
        show ? linksContainer.style.display = "flex" :
            linksContainer.style.display = "none"
    }


    links.forEach(link => {
        link.onclick = () => {
            show = false
            linksContainer.style.display = "none"
        }
    })

    window.onscroll = () => {
        navBar.classList.toggle("scroll", scrollY > 0)
        logoMenu.classList.toggle("show", scrollY > 250)

    }