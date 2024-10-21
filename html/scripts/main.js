document.addEventListener('DOMContentLoaded', getUserID);


const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', function() {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-bs-theme', 'light');
        toggleButton.textContent = 'Modo oscuro';
    } else {
        document.body.setAttribute('data-bs-theme', 'dark');
        toggleButton.textContent = 'Modo claro';
    }
});
// Mover la página a la derecha cuando se abra el menú
const offcanvasMenu = document.getElementById('offcanvasMenu');
offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
    document.body.classList.add('offcanvas-open');
});
offcanvasMenu.addEventListener('hidden.bs.offcanvas', function () {
    document.body.classList.remove('offcanvas-open');
});


/* Cuando se carga la página, si no hay almacenado un id
 * de usuario registrado válido, redirige automáticamente
 * a la página de login 
 */
document.addEventListener('DOMContentLoaded', async function() {
    // Obtener el user_id almacenado en localStorage
    const userId = localStorage.getItem('user_id');

    if (!userId) {
        // Si no hay user_id en el almacenamiento local, redirige a la página de login
        window.location.href = 'login.html';
        return;
    }
});


// Función para obtener el user_id almacenado en localStorage
async function getUserID() {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
        window.location.href = 'login.html';
        return;
    }
    return userId;
};