//fixes regeneratorRuntime errors in jest
import '@babel/polyfill'
import 'babel-jest'

/*const pol = document.querySelector('.polarity')
const extra = document.querySelector('.extra')
const article = document.querySelector('article')*/

/*export const pol = document.querySelector('.polarity')
export const extra = document.querySelector('.extra')
export const article = document.querySelector('article')*/

//sets up alert functionality for jest
jest.spyOn(window, 'alert').mockImplementation((e) => {
    console.log(e)
})