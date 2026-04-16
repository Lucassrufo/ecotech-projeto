function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    const validUser = "admin";
    const validPass = "1234";

    if (user === validUser && pass === validPass) {
        message.textContent = "Login realizado com sucesso!";
        message.className = "message success";

        setTimeout(() => {
            alert("Bem-vindo ao sistema EcoTech 🌱");
        }, 500);
    } else {
        message.textContent = "Usuário ou senha inválidos";
        message.className = "message error";
    }
}