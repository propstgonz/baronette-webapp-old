document.addEventListener('DOMContentLoaded', displayUserName);
document.addEventListener('DOMContentLoaded', getAdminAccess);
document.getElementById('btn-update-info').addEventListener('click', updateUserInfo);
document.getElementById('btn-update-pwd').addEventListener('click', updatePassword);


// Función para obtener el user_id almacenado en localStorage
async function getUserID() {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
        window.location.href = 'login.html';
        return;
    }
    return userId;
};


// Función para actualizar la contraseña del usuario
async function updatePassword() {
    const userId = await getUserID();
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!currentPassword || !newPassword) {
        alert('Por favor, completa ambos campos.');
        return;
    }

    const payload = {
        currentPassword,
        newPassword
    };

    try {
        const response = await fetch(`http://localhost:3000/api/change-password/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Contraseña actualizada con éxito.');
        } else {
            alert(data.message || 'Error al actualizar la contraseña.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar cambiar la contraseña.');
    }
}


// Función para actualizar la información del usuario
async function updateUserInfo() {
    const userId = await getUserID();
    const firstName = document.getElementById('firstName').value;
    const lastName1 = document.getElementById('lastName1').value;
    const lastName2 = document.getElementById('lastName2').value;
    const email = document.getElementById('email').value;

    const updatedInfo = {};
    if (userId) updatedInfo.user_id = userId;
    if (firstName) updatedInfo.first_name = firstName;
    if (lastName1) updatedInfo.last_name1 = lastName1;
    if (lastName2) updatedInfo.last_name2 = lastName2;
    if (email) updatedInfo.email = email;

    if (Object.keys(updatedInfo).length === 0) {
        alert('No se ha proporcionado información para actualizar.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/update-user/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedInfo),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Información actualizada con éxito.');
        } else {
            alert(data.message || 'Error al actualizar la información.');
        }
    } catch (error){
        console.error('Error:', error);
        alert('Error al intentar actualizar la información.');
    }
    
}


// función para escribir el nombre de usuario en el panel principal
function displayUserName() {
    const userName = localStorage.getItem('user_name');
    const usernameInput = document.getElementById('username');
    if (userName) {
        document.getElementById('user-name-label').textContent = userName;
        usernameInput.value = userName;
    } else {
        console.log('No se encontró el nombre de usuario en localStorage.');
    }
}


// Función para habilitar los botones del panel de administración
function enableAdminButtons() {
    document.getElementById('del-user-btn').disabled = false;
    document.getElementById('validateUsersButton').disabled = false;
    document.getElementById('updateListButton').disabled = false; 
}


// Función para desplegar las opciones de administrador
async function getAdminAccess() {
    try {
        const userId = await getUserID();
        
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
                document.getElementById('admin-panel').hidden = false; // Mostrar el panel de administración
                await loadUnverifiedUsers();
                await loadVerifiedUsers();
                document.getElementById('del-user-btn').addEventListener('click', deleteSelectedUser);
                document.getElementById('validateUsersButton').addEventListener('click', validateUsers);
                document.getElementById('updateListButton').addEventListener('click', loadUnverifiedUsers);
                enableAdminButtons();
            }
        } else {
            console.error('Error en la respuesta de la API:', data.message);
        }
    } catch (error) {
        console.error('Error al conectar con el servidor:', error);
    }
};


// Función para eliminar un usuario seleccionado desde el panel de administración
async function deleteSelectedUser() {
    const selectElement = document.getElementById('userSelect');
    const selectedUser = selectElement.value;

    if (!selectedUser) {
        alert('No has seleccionado ningún Usuario.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/delete-user/${selectedUser}`,
            {
                method: 'DELETE', headers: {'Content-Type': 'application/json',}
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            await loadVerifiedUsers();
        } else{
            alert(data.message || 'Error al eliminar el usuario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar eliminar el usuario');
    }
}


// Función para cargar usuarios no verificados en el panel de administración
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
            const tbody = document.querySelector('#admin-panel tbody');
            tbody.innerHTML = '';
            users.forEach(user => {
                const row = document.createElement('tr');
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
                tbody.appendChild(row);
            });
        } else {
            console.error('Error fetching users:', users.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


// Función para enviar a la API la lista de los usuarios que se quieren verificar desde el panel de administración
async function validateUsers() {

    const checkboxes = document.querySelectorAll('.form-check-input:checked'); // Obtiene los checkboxes marcados
    const usernames = Array.from(checkboxes).map(checkbox => {
        const row = checkbox.closest('tr'); // Obtén la fila más cercana
        return row.querySelector('td:nth-child(4) input').value; // Selecciona el input en la columna del username
    });

    if (usernames.length === 0) {
        alert('No se han seleccionado usuarios para verificar.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/verify-users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ usernames }), // Enviar los usernames seleccionados
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            await loadUnverifiedUsers(); // Actualizar la lista
        } else {
            alert(data.message || 'Error al verificar usuarios');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar verificar usuarios');
    }
};


// Función para cargar el desplegable con la lista de usuarios del panel de administración
async function loadVerifiedUsers() {
    const selectElement = document.getElementById('userSelect');
    try {
        const response = await fetch('http://localhost:3000/api/verified-users', {method: 'GET',});
        const users = await response.json();

        if (response.ok) {
            selectElement.innerHTML = '<option value ="">Selecciona un usuario</option>';
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.username;
                option.textContent = `${user.username}`;
                selectElement.appendChild(option);
            });
        } else {
            alert('Error al cargar la lista de usuarios');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar cargar la lista de usuarios');
    }
}

async function deleteAccount() {
    try {
        const userId = await getUserID();

        const response = await fetch('http://localhost:3000/api/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId})
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Cuenta eliminada correctamente:', data.message);
            alert('Cuenta eliminada correctamente.');
            window.location.href = 'login.html';
        } else {
            console.error('Error al intentar eliminar la cuenta:', data.message);
            alert('Error al intentar eliminar la cuenta.');
        }
    } catch (error) {
        console.error('Error al conectar con el servidor:', error);
        alert('Error al conectar con el servidor.');
    }
}