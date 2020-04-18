const displayData = require('./../src/client/js/apiHandler')


describe('display data' , () => {
    test('should return undefined if no errors', () => {
        const data = [{'result': { 'article': 'one' }}, { 'result': { 'polarity': 'two'}}]

        expect(displayData(data)).toBe('undefined')
    })
})