const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.');
    }
});