const form = document.querySelector('form')
const formToggle = document.getElementById('toggle')


/* <div class="input-field">
          <input type="text" name="" id="email" required>
          <label for="email">Enter your email</label>
        </div> */
        
const createNameInput = () => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('input-field')
    
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.id = 'name'
    newInput.required = true
    
    const newLabel = document.createElement('label')
    newLabel.setAttribute('for', 'name')
    newLabel.textContent = "Enter your name"

    newDiv.appendChild(newInput)
    newDiv.appendChild(newLabel)

    const h2 = document.getElementById('title');
    form.insertBefore(newDiv, h2.nextSibling)
}

const removeNameInput = () => {
    const h2 = document.getElementById('title');
    const nameNode = h2.nextSibling
    form.removeChild(nameNode)
}

const changeForm = () => {
    console.log('clicked');
    const login = form.classList.toggle('login')

    const h2 = document.getElementById('title')
    const submit = document.querySelector('button')
    const changeToLogin = () => {
        h2.textContent = "Log in";
        removeNameInput();
        submit.textContent = "Log in"
    }
    const changeToSignup = () => {
        h2.textContent = "Sign up";
        createNameInput();
        submit.textContent = "Sign up"
    }

    if (login) {
    
        changeToLogin();
            
    } else {
        
        changeToSignup();
    }
}


window.addEventListener('load', () => {
    changeForm();
})

formToggle.addEventListener('click', () => {
    
    changeForm();

})