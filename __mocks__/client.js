import '@babel/polyfill'
import 'babel-jest'

jest.spyOn(window, 'alert').mockImplementation((e) => {
    console.log(e)
})