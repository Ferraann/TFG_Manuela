// Seleccionamos todos los ojitos de la página
const togglePasswords = document.querySelectorAll('.toggle-password');

togglePasswords.forEach(ojo => {
    ojo.addEventListener('click', function() {
        // Buscamos el input que corresponde a este ojito concreto
        const inputId = this.getAttribute('data-target');
        const input = document.getElementById(inputId);

        // Si es tipo contraseña, lo cambiamos a texto. Si es texto, a contraseña.
        if (input.type === 'password') {
            input.type = 'text';
            // Cambia esta ruta a la de tu icono de ojo abierto
            this.src = 'src/iconos/ojo-abierto.png';
        } else {
            input.type = 'password';
            // Cambia esta ruta a la de tu icono de ojo cerrado
            this.src = 'src/iconos/ojo-cerrado.png';
        }
    });
});

// Rellenar los días automáticamente
const selectDia = document.getElementById('dia');
for(let i=1; i<=31; i++) {
    selectDia.innerHTML += `<option value="${i}">${i}</option>`;
}

const selectAnyo = document.getElementById('anyo');
const currentYear = new Date().getFullYear();
for(let i=currentYear; i>=1920; i--) {
    selectAnyo.innerHTML += `<option value="${i}">${i}</option>`;
}