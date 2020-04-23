/**
 * Sets up listener for click event for 'to-top' element in footer
 */
document.querySelector('#to-top').addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
})

//checks to see if footer toTop button should be visible
function checkToTop() {
    const viewHeight = window.innerHeight
    const appHeight = document.body.clientHeight

    const toTop = document.querySelector('#to-top')

    if(appHeight > viewHeight) {
        toTop.setAttribute('style', 'display: block')
    } else {
        toTop.setAttribute('style', 'display: none') 
    }
}

//initially check if to top button is needed
window.onload = () => {
    checkToTop()
}

export { checkToTop }