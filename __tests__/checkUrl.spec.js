const checkUrl = require('./../src/client/js/formHandler')
import { TestScheduler } from 'jest'

describe('Check Url', () => {
    test('It should check for a valid url via the passed argument (url)', () => {
        const input = 'https://www.bbc.co.uk/news/business-52319576'

        const output = true;

        expect(checkUrl(input)).toEqual(output)
    })
})

describe('Check Url', () => {
    test('It should check for a valid url via the passed argument (url)', () => {
        const inputTwo = '.bbc.co.uk/news/business-52319576'

        const outputTwo = false;

        expect(checkUrl(inputTwo)).toEqual(outputTwo)
    })
})