const displayData = require('./../src/client/js/apiHandler')


describe('display data' , () => {
    test('should return undefined if no errors', () => {
        const data = [{'result': { 'lang': 'one' }},
         { 'result': { 'polarity': 'two' ,'subjectivity': 'negative'}},
          {'result': {'sentences': ['one sentence', 'two sentence']}}]

        document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`

        expect(displayData(data)).toBe(undefined)
    })
})