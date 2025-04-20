const threeLines = document.querySelector('.three-lines')
const threeLinesIcon = document.querySelector('.three-lines i')
const dropdownMenu = document.querySelector('.dropdown-menu')

threeLines.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    threeLinesIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
