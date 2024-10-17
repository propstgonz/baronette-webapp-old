document.addEventListener('DOMContentLoaded', loadUnverifiedUsers);
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


// Función para cargar usuarios no verificados
document.getElementById('updateListButton').addEventListener('click', loadUnverifiedUsers);
async function loadUnverifiedUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/unverified-users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const users = await response.json();

        if (response.ok) {
            // Selecciona el cuerpo de la tabla
            const tbody = document.querySelector('#admin-panel tbody');
            tbody.innerHTML = ''; // Limpiar el contenido previo

            users.forEach(user => {
                // Crear una nueva fila
                const row = document.createElement('tr');

                // Agregar las celdas de la fila con los datos del usuario
                row.innerHTML = `
                    <td><input type="text" class="form-control-plaintext" readonly value="${user.first_name}"></td>
                    <td><input type="text" class="form-control-plaintext" readonly value="${user.last_name_1}"></td>
                    <td><input type="text" class="form-control-plaintext" readonly value="${user.last_name_2}"></td>
                    <td><input type="text" class="form-control-plaintext" readonly value="${user.username}"></td>
                    <td><input type="email" class="form-control-plaintext" readonly value="${user.email}"></td>
                    <td class="text-center">
                        <input type="checkbox" class="form-check-input">
                    </td>
                `;

                // Añadir la fila a la tabla
                tbody.appendChild(row);
            });
        } else {
            console.error('Error fetching users:', users.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


// Función para enviar a la API la lista de los usuarios que se deben verificar
document.getElementById('validateUsersButton').addEventListener('click', async () => {
    const checkboxes = document.querySelectorAll('.form-check-input:checked'); // Obtiene los checkboxes marcados
    console.log('Checkboxes seleccionados:', checkboxes);
    const usernames = Array.from(checkboxes).map(checkbox => {
        const row = checkbox.closest('tr'); // Obtén la fila más cercana
        return row.querySelector('td:nth-child(4) input').value; // Selecciona el input en la columna del username
    });
    console.log(usernames)
    if (usernames.length === 0) {
        alert('No se han seleccionado usuarios para verificar.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/verify-users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usernames }), // Enviar los usernames seleccionados
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            // Aquí podrías actualizar la lista de usuarios no verificados después de la verificación
            await loadUnverifiedUsers(); // Llama a tu función de actualizar lista aquí
        } else {
            alert(data.message || 'Error al verificar usuarios');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar verificar usuarios');
    }
});

