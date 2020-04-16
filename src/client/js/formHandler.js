function handleSubmit(event) {
    event.preventDefault()

    const testUrl = 'https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-52303859'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
   // TODO: Place the postdata in a seperate js file and call via 'Client'
    postData('/apiRequest', {url: testUrl})
    .then((data) => {
        console.log('returned article data: '+data.sentences)
    })
}

const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    try {
        const articleData = await res.json();
        return articleData;
    } catch (error) {
        console.log('error', error)
    }
}

export { handleSubmit }
