export const loginUser = (data) => {
    const bodyData = {
        email: data.email,
        password: data.password
    }
    fetch('http://localhost:4000/user/login/', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: { 'Content-Type': 'application/json' }
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}

export const registerUser = (data) => {
    const bodyData = {
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm,
        avatar: data.avatar
    }
    fetch('http://localhost:4000/user/register/', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: { 'Content-Type': 'application/json' }
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}