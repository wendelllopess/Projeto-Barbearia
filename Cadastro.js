const formulario = document.getElementById("formulario");
let botaoCadastro = document.getElementById('botaoCadastro');

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(validarFormulario){
        cadastraUsuario();

        setTimeout(()=>{
            window.location.href="login.html"
        }, 2000)
        alert("Usuario cadastrado com sucesso!")
    } else{
        alert("O formulario presisa ser preenchido!")
    }
   
})

function cadastraUsuario(){
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;
    let senhaConfirmacao = document.getElementById("senhaConfirmacao").value;
   
    if(senha !== senhaConfirmacao){
        alert("As senhas devem ser iguais!")
        return;
    }

    localStorage.setItem("nome", nome); 
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("senha", senha);
    localStorage.setItem("senhaConfirmacao", senhaConfirmacao);
}

function validarFormulario(){
    if(nome.value === '' || cpf.value === '' || email.value === '' || telefone.value === '' || senha.value === '' || senhaConfirmacao.value === ''){
        return false;
    }
    else{
        return true
    }
}

botaoCadastro.addEventListener('click', cadastraUsuario());
