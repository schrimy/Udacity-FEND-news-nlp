import { checkUrl } from './../src/client/js/formHandler'
import { TestScheduler } from 'jest'

//test to see if the checkUrl function runs as expected
describe('Check Url', () => {
    test('It should check for a valid url via the passed argument (url)', () => {
        const input = 'https://www.bbc.co.uk/news/business-52319576'

        const output = true;

        expect(checkUrl(input)).toEqual(output)
    })
})

//test to see if the checkUrl function handles errors from incorrect urls
describe('Check Url', () => {
    test('It should check for a valid url via the passed argument (url)', () => {
        const inputTwo = '.bbc.co.uk/news/business-52319576'

        const outputTwo = false;

        expect(checkUrl(inputTwo)).toEqual(outputTwo)
    })
})