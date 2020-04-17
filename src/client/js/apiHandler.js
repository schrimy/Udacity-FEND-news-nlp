function nlpRequest(formUrl) {
    postData('/apiRequest', {url: formUrl})
    .then((data) => {
        displayData(data)
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

function displayData(articleData) {
    const articleText = articleData[0].result.article
    const articlePol = articleData[1].result.polarity

    document.getElementById('results').innerText = `${articlePol}
    ${articleText}`
}

module.exports = displayData
export { nlpRequest }