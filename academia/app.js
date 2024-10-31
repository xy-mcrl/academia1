document.getElementById('auth-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Aqui você pode enviar os dados para o backend para autenticação
    console.log("Login:", { username, password, role });
    alert("Login bem-sucedido!");
    
    // Redirecionar baseado no papel (role)
    if (role === 'trainer') {
        window.location.href = 'trainer.html';
    } else {
        window.location.href = 'student.html';
    }
});

document.getElementById('register-button').addEventListener('click', () => {
    // Lógica de registro (pode ser uma nova página ou modal)
    alert("Registro não implementado.");
});
