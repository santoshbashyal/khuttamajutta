// Women navigation
function move_up_women() {
    const divElement = document.getElementById('womenTag')
    divElement.scrollIntoView()
}

const womenClick = document.getElementById('womenId')
womenClick.addEventListener('click', move_up_women)

// Men navigation
function move_up_men() {
    const divElement = document.getElementById('menTag')
    console.log(divElement)
    divElement.scrollIntoView()
}

const menClick = document.getElementById('menId')
menClick.addEventListener('click', move_up_men)