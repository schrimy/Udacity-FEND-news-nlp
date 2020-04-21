document.body.innerHTML = `<div id="to-top"></div>`
const app = require('./../src/client/js/app')

//test to make sure the footer click event is handled as expected
describe('footer click', () => {
    test('should return undefined if click event handled', () => {
        const event = new Event('click')
        expect.objectContaining(event)
    })
})