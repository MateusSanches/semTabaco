
let nome = document.getElementById('nome');
let celular = document.getElementById('celular');
let email = document.getElementById('email');
let senha = document.getElementById('password');

document.querySelector('form').addEventListener('submit', (e) => {


    let novoCadastro = {
            nome: nome.value,
            celular: celular.value,
            email: email.value,
            senha: senha.value
    }


  window.localStorage.setItem( email.value, JSON.stringify(novoCadastro));
});
