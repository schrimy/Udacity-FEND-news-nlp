function handleSubmit(event) {
    event.preventDefault()

    const testUrl = 'https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-52303859'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
   
    // TODO: when setting up regex checks here, place promises in apiHandler and update to function
    Client.postData('/apiRequest', {url: testUrl})
    .then((data) => {
        console.log('returned article data: '+JSON.stringify(data[0].result.article) + ' sentiment '+JSON.stringify(data[1].result.polarity))
    })
}

export { handleSubmit }
