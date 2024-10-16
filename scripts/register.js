const form = document.querySelector('#registerForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.');
    } else {
        event.preventDefault(); //
        alert('Registro exitoso, redirigiendo a la página de confirmación.');
        window.location.href = "post-register.html";
    }
});