export function getTopics() {
    fetch('/topics/', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    const data = []
    return data
}

export function createNewTopic() {
    const title = (document.getElementById("new-topic-title") || {}).value || ''
    const description = (document.getElementById("new-topic-description") || {}).value || ''
    const creatorUsername = 'nikitochkaa'
    fetch('/topics/', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            creatorUsername: creatorUsername
        }),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
}