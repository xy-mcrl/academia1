let currentRole = '';

function showAuth(role) {
    currentRole = role;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'block';
    document.getElementById('auth-title').innerText = `Academia - Autenticação: ${role.charAt(0).toUpperCase() + role.slice(1)}`;
}

function showRegister() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('register-screen').style.display = 'block';
}

function showRoleSelection() {
    document.getElementById('register-screen').style.display = 'none';
    document.getElementById('role-selection').style.display = 'block';
}

function login() {
    // Aqui você deve adicionar a lógica de autenticação real
    alert('Login realizado com sucesso!');
    if (currentRole === 'trainer') {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('trainer-main').style.display = 'block';
    } else {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('student-main').style.display = 'block';
    }
}

function register() {
    // Aqui você deve adicionar a lógica de registro real
    alert('Cadastro realizado com sucesso!');
    showRoleSelection();
}

function logout() {
    document.getElementById('trainer-main').style.display = 'none';
    document.getElementById('student-main').style.display = 'none';
    showRoleSelection();
}

function showMainScreen(role) {
    document.getElementById('trainer-main').style.display = 'none';
    document.getElementById('student-main').style.display = 'none';
    if (role === 'trainer') {
        document.getElementById('trainer-main').style.display = 'block';
    } else {
        document.getElementById('student-main').style.display = 'block';
    }
}

function showScreen(screen) {
    const screens = [
        'trainer-main',
        'student-main',
        'registerWorkout',
        'viewWorkouts',
        'studentProgress',
        'registerNutrition',
        'chat'
    ];

    screens.forEach(s => {
        document.getElementById(s).style.display = 'none';
    });
    document.getElementById(screen).style.display = 'block';
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>Você:</strong> ${messageInput.value}`;
    messagesDiv.appendChild(newMessage);
    messageInput.value = ''; // Limpa o campo de entrada
}
