export async function getTopics() {
    return fetch('/topics/', {
        method: 'GET',
    })
        .then(response => response.json())
}

export async function createNewTopic() {
    const title = (document.getElementById("new-topic-title") || {}).value || ''
    const description = (document.getElementById("new-topic-description") || {}).value || ''
    const creatorUsername = 'bhurov'
    await fetch('/topics/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            creatorUsername
        }),
    })
}
export async function deleteTopicById() {

    await fetch('/topics/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',

    })
}