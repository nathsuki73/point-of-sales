const form = document.querySelector('form')
const formToggle = document.getElementById('toggle')
const forget = form.querySelector('forget');


let removedElement = null



const login = (event) => {
    event.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value == "tantan" && password.value == "123") {
        window.location.href = "./index.html"
    }
}

const clearInput = () => {
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
}
const createNameInput = () => {
    const element = form.children[3]
    if (element) {
        removedElement = element
        form.removeChild(element)
    }

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

    if (removedElement) {
        
        form.insertBefore(removedElement, form.children[3])
        removedElement = null
    }

    
}

const changeForm = () => {
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

form.addEventListener('submit', login)

window.addEventListener('load', () => {
    changeForm();
})

formToggle.addEventListener('click', () => {
    
    changeForm();
    clearInput();

})



