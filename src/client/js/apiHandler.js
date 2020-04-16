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

export { postData }