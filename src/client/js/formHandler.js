function handleSubmit(event) {
    event.preventDefault()

    const testUrl = 'https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-52303859'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
   
    Client.postData('/apiRequest', {url: testUrl})
    .then((data) => {
        console.log('returned article data: '+data.sentences)
    })
}

export { handleSubmit }
