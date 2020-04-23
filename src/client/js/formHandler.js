const urlValue = document.getElementById('articleUrl')

//handles form submit from input field
function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = urlValue.value

    if(!checkUrl(formText)) {
        alert('Please check entered url and try again')
        return
    } else {
        Client.nlpRequest(formText)
    }
}

//validates input field when focus changes
function onBlur() {
    const url = urlValue.value

    if(!checkUrl(url)){
        urlValue.value = ''
        urlValue.classList.add('error-text')
        urlValue.setAttribute('placeholder', 'Enter valid url')
    } else {
        urlValue.classList.remove('error-text')
    }
}

//performs input field validation
function checkUrl(url) {
    //regex pattern developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067) used 17/04/2020
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (url.match(url_pattern)) {
        return true;
    } else {
        return false;
    }
}

//uncomment the module export for running test npm script
export { checkUrl }
export { onBlur }
export { handleSubmit }
