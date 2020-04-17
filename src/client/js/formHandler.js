function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    if(!checkUrl(formText)){
        alert('Please check entered url and try again')
        return
    } else {
        Client.nlpRequest(formText)
    }
}

function checkUrl(url) {
    //regex developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067)
    var url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (url.match(url_pattern)) {
        return true;
    } else {
        return false;
    }
}

export { handleSubmit }
