document.addEventListener('DOMContentLoaded', async function() {
    // Obtener el user_id almacenado en localStorage
    const userId = localStorage.getItem('user_id');

    if (!userId) {
        // Si no hay user_id en el almacenamiento local, redirige a la página de login
        window.location.href = 'login.html';
        return;
    }

    try {
        // Llamada a la API para verificar si el usuario es administrador
        const response = await fetch('http://localhost:3000/api/settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId })
        });

        const data = await response.json();

        if (response.ok) {
            // Si el usuario es admin, mostramos el panel de administración
            if (data.message === 'Entrando en ajustes como administrador') {
                document.getElementById('admin-panel').style.display = 'block';  // Mostrar el panel de administración
            } else {
                document.getElementById('admin-panel').style.display = 'none';   // Ocultar el panel de administración
            }
        } else {
            console.error('Error en la respuesta de la API:', data.message);
        }
    } catch (error) {
        console.error('Error al conectar con el servidor:', error);
    }
});
