const form = document.querySelector('#registerForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const name = document.getElementById('name').value;
    const last_name_1 = document.getElementById('last_name_1').value;
    const last_name_2 = document.getElementById('last_name_2').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Validación de contraseñas
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Validar que los campos requeridos no estén vacíos (opcional)
    if (!name || !last_name_1 || !username || !email || !password) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Preparar los datos para el envío
    const data = {
        name,
        last_name_1,
        last_name_2,
        username,
        email,
        user_password: password,
        confirm_password: confirmPassword
    };

    try {
        /*
         * Enviar los datos al servidor
         * Al usar fetch en el lado del cliente, ya no es necesario definir
         * el atributo action en el formulario, porque el envío se gestiona
         * por JS y no por el comportamiento nativo del formulario.
         */
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            /*
             * Registro exitoso, redirigir a la página de confirmación
             * Aquí no te he modificado la redirección pero considero que
             * por reducir el trabajo, se puede redirigir a 
             * la página login.html y mostrar que te has registrado con éxito 
             * solamente en un pop-up. 
             */
            alert('¡Te has registrado correctamente!');
            window.location.href = "post-register.html"; // Me refiero a esto
        } else {
            alert(result.message || 'Error en el registro.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar registrar el usuario.');
    }
});
