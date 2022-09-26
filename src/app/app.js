export const dropdownMenu = () => {
    let toggle = document.querySelector('.toggle');
    let dropdown = document.querySelector('.dropdown')
    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('toggleCSS')
    })
}