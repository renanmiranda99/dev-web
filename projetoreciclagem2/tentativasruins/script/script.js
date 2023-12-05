// Obtém os elementos do formulário
function saveFormData() {
    // Obtém os valores dos campos de email e senha
    var email = document.getElementById("inputEmail4").value;
    var senha = document.getElementById("inputPassword4").value;
    var endereço = document.getElementById("inputAddress").value;
    var cidade = document.getElementById("inputCity").value;
    var estado = document.getElementById("inputEstado").value;


    // Cria um objeto para armazenar os dados do formulário
    var dados = {
        email: email,
        senha: senha,
        endereço: endereço,
        cidade: cidade,
        estado: estado,
    };

    console.log("objetodados:");
    console.log(dados);

    console.log(typeof dados);
    
    adicionarNoLocalStorage(dados);
    
    // Limpa os campos do formulário
    var form = document.querySelector('form');
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', saveFormData);
});

function adicionarNoLocalStorage(novoDado){
     var dadosLocalStorageString = localStorage.getItem('userData');
    console.log(dadosLocalStorageString);

    var dadosLocalStorage = JSON.parse(dadosLocalStorageString) || [];
    console.log(dadosLocalStorage);
    
    dadosLocalStorage.push(novoDado);
    console.log(dadosLocalStorage);

    var novoJSON = JSON.stringify(dadosLocalStorage);

    // Salva os dados no localStorage
    localStorage.setItem('userData', novoJSON);
}




/*if (typeof displayFormData === 'function') {
    document.getElementById('exibir').addEventListener('click', displayFormData);
} else {
    console.error("A função displayFormData não está definida.");
}*/