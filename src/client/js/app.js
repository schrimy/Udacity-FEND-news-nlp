/**
 * Sets up listener for click event for 'to-top' element in footer
 */
document.querySelector('#to-top').addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
})