const urlValue = document.getElementById('articleUrl')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = urlValue.value

    console.log("::: Form Submitted :::")
    if(!checkUrl(formText)){
        alert('Please check entered url and try again')
        return
    } else {
        Client.nlpRequest(formText)
    }
}

function onBlur(){
    const url = urlValue.value

    if(!checkUrl(url)){
        alert('Please check entered url')
    }
}

function checkUrl(url) {
    //regex developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067)
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (url.match(url_pattern)) {
        return true;
    } else {
        return false;
    }
}

//module.exports = checkUrl
export { onBlur }
export { handleSubmit }
