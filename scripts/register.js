const form = document.querySelector('#registerForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto

    const user_password = document.getElementById('user_password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const first_name = document.getElementById('first_name').value;
    const last_name_1 = document.getElementById('last_name_1').value;
    const last_name_2 = document.getElementById('last_name_2').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Validación de contraseñas
    if (user_password !== confirm_password) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Validar que los campos requeridos no estén vacíos
    if (!first_name || !last_name_1 || !username || !email || !user_password) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    /* Preparar los datos para el envío
     * Hay que cambiar el orden de la lista porque en la db están cruzados
     * los campos user_password y email respecto a el orden en el que
     * se introducen en el formulario de registro
     */
    const data = {
        first_name,
        last_name_1,
        last_name_2,
        username,
        user_password,
        email
    };

    try {
        /*
         * Enviar los datos al servidor
         * Al usar fetch en el lado del cliente, ya no es necesario definir
         * el atributo action en el formulario, porque el envío se gestiona
         * por JS y no por el comportamiento nativo del formulario.
         */
        const response = await fetch(`${API_BASE_URL}/register`, {
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
