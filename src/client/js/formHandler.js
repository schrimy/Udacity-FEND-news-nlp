const urlValue = document.getElementById('articleUrl')

//handles form submit from input field
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = urlValue.value

    console.log("::: Form Submitted :::")
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

    if(!checkUrl(url) && url !== ''){
        urlValue.value = ''
        urlValue.classList.add('error-text')
        urlValue.setAttribute('placeholder', 'Enter valid url')
    } else {
        urlValue.classList.remove('error-text')
    }
}

//performs input field validation
function checkUrl(url) {
    //regex developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067)
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (url.match(url_pattern)) {
        return true;
    } else {
        return false;
    }
}

//uncomment the module export for running test npm script
//module.exports = checkUrl
export { onBlur }
export { handleSubmit }
