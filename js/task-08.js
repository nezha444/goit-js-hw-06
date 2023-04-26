const form = document.querySelector('.login-form')


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const email = form.elements.email.value
    const password = form.elements.password.value

    if(email === '' || password === ''){
       return alert('Заполните все поля')
    }

    console.log({email, password});
    form.reset()
})

