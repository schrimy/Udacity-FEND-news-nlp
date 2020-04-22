// Globals
const pol = document.querySelector('.polarity')
const extra = document.querySelector('.extra')
const article = document.querySelector('article')

//starts promises to run api url request when form has been submitted
function nlpRequest(formUrl) {
    const prompt = document.querySelector('#prompt')
    prompt.innerText = 'Loading...'
    prompt.setAttribute('style', 'display: block')

    clearData()

    postData('/apiRequest', {url: formUrl})
    .then((data) => {
        prompt.setAttribute('style', 'display: none')
        displayData(data)
    })
    .catch(err => {
        prompt.setAttribute('style', 'display: none')
        alert('Please check internet connection and URL used')
    })
}

//data passed on from api request gets parsed and populates relevant elements
function displayData(articleData) {
    let articleText
    let articlePol
    let articleSub
    let articleLang

    //parse json from api query and catch any errors
    try {
        articleText = articleData[2].result.sentences
        articlePol = articleData[1].result.polarity
        articleSub = articleData[1].result.subjectivity
        articleLang = articleData[0].result.lang
    } catch (error) {
        alert('There was an error with the url please try again or another url')
        return
    }

    //populate dom objects
    pol.innerText = `This article is ${articlePol}`

    extra.innerText = `Subjectivity: ${articleSub}
    Language: ${articleLang}`

    //runs through array of returned sentences and adds to html element
    article.innerText = ''
    articleText.forEach(sentence => {
        article.innerHTML += `<p>${sentence}</p>`;
    })
}

//clear article fields when loading another url
function clearData() {
    pol.innerText = ''
    extra.innerText = ''
    article.innerText = ''
}

//set up for post request on the server to make api request
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

//uncomment the module export for running test npm script
export { displayData }
export { nlpRequest }