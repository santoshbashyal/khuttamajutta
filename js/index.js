// Women navigation
function move_up_women() {
    const divElement = document.getElementById('womenTag')
    divElement.scrollIntoView()
}

let womenClick = document.getElementById('womenId')
let womenClick1 = document.getElementById('womenId1')

womenClick.addEventListener('click', move_up_women)
womenClick1.addEventListener('click', move_up_women)


// Men navigation
function move_up_men() {
    const divElement = document.getElementById('menTag')
    console.log(divElement)
    divElement.scrollIntoView()
}

const menClick = document.getElementById('menId')
const menClick1 = document.getElementById('menId1')

menClick.addEventListener('click', move_up_men)
menClick1.addEventListener('click', move_up_men)