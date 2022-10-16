export function signIn() {
    const username = (document.getElementById("email") || {}).value || ''
    const password = (document.getElementById("psw") || {}).value || ''
    fetch('/auth/sign-in/', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    return ''
}
export function signUp() {
    const username = (document.getElementById("email") || {}).value || ''
    const password = (document.getElementById("psw") || {}).value || ''
    fetch('/auth/sign-up/', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
}