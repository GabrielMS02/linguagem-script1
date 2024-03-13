function imprimirMsg(texto){
    alert('Você clicou no botão ' + texto);

}

function login(){
    const emailCorreto = "gabriel@gmail.com"
    const senhaCorreta = "senha"

    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto){
        if(senha != senhaCorreta)
          alert("Email ou senha incorreto")
    }else{
        alert("Email incorreto")
    }

     if(email == emailCorreto && senha == senhaCorreta){
         alert("Login realizado com sucesso")
}
if(email == emailCorreto && senha == senhaCorreta){
    window.location.href = '../index.html'
}
}
