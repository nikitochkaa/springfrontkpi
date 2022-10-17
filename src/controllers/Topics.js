export async function getTopics() {
    return fetch('/topics/', {
        method: 'GET',
    })
        .then(response => response.json())
}

export async function getTopicById(id) {
    return fetch(`/topics/${id}`, {
        method: 'GET',
    })
        .then(response => response.json())
}

export async function getPostsByTopicId(id) {
    return fetch(`/topics/${id}/posts`, {
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

export async function deleteTopicById(id) {
    const decision = confirm('Are you sure about deleting this topic?')
    if (decision) {
        await fetch(`/topics/${id}`, {
            method: 'DELETE',
        })
    }
    document.location.reload()
}
