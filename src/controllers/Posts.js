export async function addNewPost(topicId) {
    const text = document.getElementById('topic-page-posts-new-text').textContent
    const creatorUsername = 'bhurov'
    await fetch(`/posts/`, {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify({
            text: text,
            creatorUsername: creatorUsername,
            topicId: topicId
        })
    })
    document.location.reload()
}

export async function deletePostById(id) {
    const decision = confirm('Are you sure about deleting this post?')
    if (decision) {
        await fetch(`/posts/${id}`, {
            method: 'DELETE',
        })
    }
    document.location.reload()
}

