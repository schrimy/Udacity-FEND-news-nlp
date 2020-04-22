import { displayData } from './../src/client/js/apiHandler'
//test to make sure the displayData function runs as expected
describe('display data' , () => {
    test('should return undefined if no errors', () => {
        const data = [{'result': { 'lang': 'one' }},
         { 'result': { 'polarity': 'two' ,'subjectivity': 'negative'}},
          {'result': {'sentences': ['one sentence', 'two sentence']}}]

        document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`

        expect(displayData(data)).toBe(undefined)
    })
})

//test to see if the displayData function handles incomplete data
describe('display data' , () => {
    test('should return undefined after catching undefined field', () => {
        const data = undefined

        document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`

        expect(displayData(data)).toBe(undefined)
    })
})