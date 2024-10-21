/*
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    const username = document.getElementById('username').value; // Obtener el username
    const password = document.getElementById('user_password').value;

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Si el login fue exitoso, redirigir a index.html y almacenar la id del usuario
            localStorage.setItem('user_id', data.user_id);
            window.location.href = 'index.html';
        } else {
            // Manejo de errores, mostrar mensaje
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar iniciar sesión');
    }
});
*/