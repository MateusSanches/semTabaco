let email = document.getElementById('email');
let senha = document.getElementById('password');

document.querySelector('form').addEventListener('submit', (e) => {

    let loginInfo = window.localStorage.getItem(email.value);

    if (loginInfo === null){
        e.preventDefault();
        alert('Email nao encontrado')
    } else {

        loginInfo = JSON.parse(loginInfo)
        
        if( loginInfo.senha !== senha.value){
            e.preventDefault();
            alert('Senha incorreta!');
        }
    }
});
