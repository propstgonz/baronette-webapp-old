
    // Toggle entre temas claro y oscuro
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