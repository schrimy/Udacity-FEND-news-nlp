import { handleSubmit } from './js/formHandler'
import { onBlur } from './js/formHandler'
import { nlpRequest } from './js/apiHandler'
import './js/app'

//import scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/footer.scss'

//import images
import './images/newspaper.jpg'
import './images/logo.png'

//export js functions for use within the app
export {
    handleSubmit,
    onBlur,
    nlpRequest,
}
