const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name')


const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'block';
    userName.style.display = 'block';
    userName.textContent = user.login
    modalAuth.style.display = 'none';
    console.log(user);
    
}
const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
});
buttonOut.addEventListener('click', () => {
    logout();
});
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
});
logInForm.addEventListener('submit',(event) => {
    event.preventDefault();
    
    if(passwordInput.value == '' || loginInput.value == ''){
        alert('Вы заполнили не все поля');
        return false;
        
    }
    
    const user = {
        login:loginInput.value,
        password:passwordInput.value
    }
    localStorage.setItem('user',JSON.stringify(user))
    login(user,)
});
if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}