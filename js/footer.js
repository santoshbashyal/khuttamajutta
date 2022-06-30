// const createFooter = () =>'

const GoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.getElementById('gotoTop').addEventListener('click', GoTop)