const formulario = document.getElementById("formulario");
let botaoCadastro = document.getElementById('botaoCadastro');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (validarFormulario()) {
        if (cadastraUsuario()) {
            console.log("Cadastro realizado, redirecionando");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Erro no cadastro. Verifique se as senhas são iguais.");
        }
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

function cadastraUsuario() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;
    let senhaConfirmacao = document.getElementById("senhaConfirmacao").value;
   
    if (senha !== senhaConfirmacao) {
        return false; // Retorna false se as senhas não forem iguais
    }

    // Gera uma chave única para cada usuário baseada no email
    let chaveUsuario = email.toLowerCase(); // Usamos o email como chave única

    // Verifica se já existe um usuário com essa chave
    if (localStorage.getItem(chaveUsuario) !== null) {
        alert("Já existe um usuário cadastrado com esse email.");
        return false;
    }

    // Armazena os dados do usuário usando a chave única
    let dadosUsuario = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        senha: senha
    };

    // Converte os dados do usuário em formato JSON e armazena no localStorage
    localStorage.setItem(chaveUsuario, JSON.stringify(dadosUsuario));

    return true; // Retorna true se o cadastro for bem-sucedido
}

function validarFormulario() {
    let nome = document.getElementById("nome");
    let cpf = document.getElementById("cpf");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let senha = document.getElementById("senha");
    let senhaConfirmacao = document.getElementById("senhaConfirmacao");

    if (nome.value === '' || cpf.value === '' || email.value === '' || telefone.value === '' || senha.value === '' || senhaConfirmacao.value === '') {
        return false;
    }
    return true;
}

botaoCadastro.addEventListener('click', cadastraUsuario);
