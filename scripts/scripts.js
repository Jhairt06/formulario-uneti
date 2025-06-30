// Función para validar el formulario
function validarFormulario() {
    let valido = true;
    
    // Validar nombre
    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('error-nombre');
    
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        errorNombre.style.display = 'block';
        nombre.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else if (nombre.value.trim().length < 3) {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
        errorNombre.style.display = 'block';
        nombre.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else {
        errorNombre.style.display = 'none';
        nombre.style.borderColor = '#e9ecef';
    }
    
    // Validar email
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value.trim() === '') {
        errorEmail.textContent = 'El email es obligatorio';
        errorEmail.style.display = 'block';
        email.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else if (!emailRegex.test(email.value)) {
        errorEmail.textContent = 'Ingrese un email válido';
        errorEmail.style.display = 'block';
        email.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else {
        errorEmail.style.display = 'none';
        email.style.borderColor = '#e9ecef';
    }
    
    // Validar teléfono
    const telefono = document.getElementById('telefono');
    const errorTelefono = document.getElementById('error-telefono');
    const telefonoRegex = /^[0-9]{10,15}$/;
    
    if (telefono.value.trim() === '') {
        errorTelefono.textContent = 'El teléfono es obligatorio';
        errorTelefono.style.display = 'block';
        telefono.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else if (!telefonoRegex.test(telefono.value)) {
        errorTelefono.textContent = 'Ingrese un teléfono válido (10-15 dígitos)';
        errorTelefono.style.display = 'block';
        telefono.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else {
        errorTelefono.style.display = 'none';
        telefono.style.borderColor = '#e9ecef';
    }
    
    // Validar fecha de nacimiento
    const fechaNacimiento = document.getElementById('fecha-nacimiento');
    const errorFecha = document.getElementById('error-fecha');
    const fecha = new Date(fechaNacimiento.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    
    if (fechaNacimiento.value === '') {
        errorFecha.textContent = 'La fecha de nacimiento es obligatoria';
        errorFecha.style.display = 'block';
        fechaNacimiento.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else if (edad < 18) {
        errorFecha.textContent = 'Debes ser mayor de 18 años';
        errorFecha.style.display = 'block';
        fechaNacimiento.style.borderColor = 'var(--danger-color)';
        valido = false;
    } else {
        errorFecha.style.display = 'none';
        fechaNacimiento.style.borderColor = '#e9ecef';
    }
    
    // Validar rol
    const rolSeleccionado = document.querySelector('input[name="rol"]:checked');
    const errorRol = document.getElementById('error-rol');
    
    if (!rolSeleccionado) {
        errorRol.textContent = 'Seleccione un rol';
        errorRol.style.display = 'block';
        valido = false;
    } else {
        errorRol.style.display = 'none';
    }
    
    return valido;
}

// Event listeners para validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const campos = ['nombre', 'email', 'telefono', 'fecha-nacimiento'];
    
    campos.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (elemento) {
            elemento.addEventListener('blur', function() {
                switch(campo) {
                    case 'nombre': validarNombre(); break;
                    case 'email': validarEmail(); break;
                    case 'telefono': validarTelefono(); break;
                    case 'fecha-nacimiento': validarFechaNacimiento(); break;
                }
            });
        }
    });
    
    const radios = document.querySelectorAll('input[name="rol"]');
    radios.forEach(radio => {
        radio.addEventListener('change', validarRol);
    });
});

function validarNombre() {
    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('error-nombre');
    
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        errorNombre.style.display = 'block';
        nombre.style.borderColor = 'var(--danger-color)';
    } else if (nombre.value.trim().length < 3) {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
        errorNombre.style.display = 'block';
        nombre.style.borderColor = 'var(--danger-color)';
    } else {
        errorNombre.style.display = 'none';
        nombre.style.borderColor = '#e9ecef';
    }
}

function validarEmail() {
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value.trim() === '') {
        errorEmail.textContent = 'El email es obligatorio';
        errorEmail.style.display = 'block';
        email.style.borderColor = 'var(--danger-color)';
    } else if (!emailRegex.test(email.value)) {
        errorEmail.textContent = 'Ingrese un email válido';
        errorEmail.style.display = 'block';
        email.style.borderColor = 'var(--danger-color)';
    } else {
        errorEmail.style.display = 'none';
        email.style.borderColor = '#e9ecef';
    }
}

function validarTelefono() {
    const telefono = document.getElementById('telefono');
    const errorTelefono = document.getElementById('error-telefono');
    const telefonoRegex = /^[0-9]{10,15}$/;
    
    if (telefono.value.trim() === '') {
        errorTelefono.textContent = 'El teléfono es obligatorio';
        errorTelefono.style.display = 'block';
        telefono.style.borderColor = 'var(--danger-color)';
    } else if (!telefonoRegex.test(telefono.value)) {
        errorTelefono.textContent = 'Ingrese un teléfono válido (10-15 dígitos)';
        errorTelefono.style.display = 'block';
        telefono.style.borderColor = 'var(--danger-color)';
    } else {
        errorTelefono.style.display = 'none';
        telefono.style.borderColor = '#e9ecef';
    }
}

function validarFechaNacimiento() {
    const fechaNacimiento = document.getElementById('fecha-nacimiento');
    const errorFecha = document.getElementById('error-fecha');
    const fecha = new Date(fechaNacimiento.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    
    if (fechaNacimiento.value === '') {
        errorFecha.textContent = 'La fecha de nacimiento es obligatoria';
        errorFecha.style.display = 'block';
        fechaNacimiento.style.borderColor = 'var(--danger-color)';
    } else if (edad < 18) {
        errorFecha.textContent = 'Debes ser mayor de 18 años';
        errorFecha.style.display = 'block';
        fechaNacimiento.style.borderColor = 'var(--danger-color)';
    } else {
        errorFecha.style.display = 'none';
        fechaNacimiento.style.borderColor = '#e9ecef';
    }
}

function validarRol() {
    const rolSeleccionado = document.querySelector('input[name="rol"]:checked');
    const errorRol = document.getElementById('error-rol');
    
    if (!rolSeleccionado) {
        errorRol.textContent = 'Seleccione un rol';
        errorRol.style.display = 'block';
    } else {
        errorRol.style.display = 'none';
    }
}