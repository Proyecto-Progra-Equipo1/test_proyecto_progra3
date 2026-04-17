/**
 * main.js — Lógica JavaScript Global
 * Hotel Brisa del Pacífico
 *
 * Este archivo se carga en todas las páginas públicas del sitio.
 * Contiene:
 *  - Efecto de scroll en la barra de navegación
 *  - Validación y envío simulado de formularios de contacto/reservación
 *  - Inicialización de Tooltips de Bootstrap
 *
 * Dependencias: jQuery 3.7+, Bootstrap 5.3+
 */

$(document).ready(function () {

    // =========================================================
    // NAVBAR — Efecto al hacer scroll
    // =========================================================
    // Añade la clase CSS 'scrolled' a la navbar cuando el usuario
    // desplaza la página más de 50px hacia abajo. Esto permite aplicar
    // estilos diferentes (ej: fondo más opaco) vía CSS.
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // =========================================================
    // FORMULARIOS — Validación y envío simulado
    // =========================================================
    // Aplica la misma lógica al formulario de reservación (#formularioReservacion)
    // y al formulario de contacto (#formularioContacto) en contact.html.
    //
    // Flujo:
    //  1. Previene el envío nativo del formulario (preventDefault).
    //  2. Recorre todos los campos requeridos (input, textarea, select).
    //  3. Si un campo está vacío, marca el campo como inválido (clase Bootstrap 'is-invalid').
    //  4. Si todos son válidos, simula una llamada AJAX con setTimeout de 1.5 segundos.
    //  5. Muestra un mensaje de éxito y resetea el formulario.

    // -- Form Data Validation --
    $('#formularioReservacion, #formularioContacto').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        // Simple fake validation
        form.find('input[required], textarea[required], select[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        });

        if (isValid) {
            // Simulate AJAX request
            const btn = form.find('button[type="submit"]');
            const originalText = btn.text();
            
            btn.text('Enviando...').prop('disabled', true);
            
            setTimeout(function() {
                alert('¡Solicitud enviada con éxito! Regresando a la página principal...');
                form[0].reset();
                form.find('.is-valid').removeClass('is-valid');
                btn.text(originalText).prop('disabled', false);

                window.location.href = "../../app/views/home.html";
            }, 1500);
        } else {
            alert('Por favor complete todos los campos requeridos.');
        }
    });

    // =========================================================
    // INICIO SESIÓN — Validación y envío simulado
    // =========================================================
    // Aplica la lógica al formulario de inicio de sesión (#formularioLogin) en login.html.
    //
    // Flujo:
    //  1. Previene el envío nativo del formulario (preventDefault).
    //  2. Obtiene el email y contraseña ingresados por el usuario.
    //  3. Simula una llamada AJAX para validar las credenciales 
    //  contra un API creada (api_users.php) con usuarios ya quemados.
    //  4. Si las credenciales son correctas, muestra un mensaje de bienvenida y redirige a home.html.
    //     Si el usuario es admin, redirige a dashboard.php.
    //  5. Si las credenciales son incorrectas, muestra un mensaje de error.
    //  6. Si todos son válidos, simula una llamada AJAX con setTimeout de 1.5 segundos.
    //  7. Muestra un mensaje de éxito y resetea el formulario.

    // -- Login User Validation --
    $('#formularioLogin').on('submit', function(e) {
        e.preventDefault();
        
        // Form & Button
        const form = $(this);
        const btn = form.find('button[type="submit"]');
        const originalText = btn.text();

        // Data
        const email = form.find('#email').val();
        const password = form.find('#password').val();

        btn.text('Verificando...').prop('disabled', true);

        // User Validation
        $.ajax({
            url: '../../api/users/api_users.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Check User Existence
                const user = data.users.find(u => u.email === email && u.password === password);

                if (user) {
                    // Admin Validation
                    if (user.email === "admin123@gmail.com" && user.password === "admin123") {
                        setTimeout(function() {
                            alert('¡Bienvenido Administrador!');
                            window.location.href = "../../app/views/dashboard.php";
                            form[0].reset();
                            form.find('.is-valid').removeClass('is-valid');
                            btn.text(originalText).prop('disabled', false);
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            alert('¡Bienvenido ' + user.name + '!');
                            window.location.href = "../../app/views/home.html";
                            form[0].reset();
                            form.find('.is-valid').removeClass('is-valid');
                            btn.text(originalText).prop('disabled', false);
                        }, 1500);
                    }
                } else {
                    alert('Credenciales incorrectas. Por favor intente de nuevo.');
                    form[0].reset();
                    form.find('.is-valid').removeClass('is-valid');
                    btn.text(originalText).prop('disabled', false);
                }
            }
        });
    });

    // =========================================================
    // REGISTRO DE USUARIOS — Validación, funciones y envío simulado
    // =========================================================
    // Aplica la lógica al formulario de registro (#formularioRegistro) en register.html.
    //
    // Flujo:
    //  1. Previene el envío nativo del formulario (preventDefault).
    //  2. Obtiene el email ingresado por el usuario.
    //  3. Simula una llamada AJAX para verificar si el email ya está registrado.
    //  4. Si el email no está registrado, muestra un mensaje de éxito y redirige a home.html.
    //  5. Si el email ya está registrado, muestra un mensaje de error.
    //  6. Si todos son válidos, simula una llamada AJAX con setTimeout de 1.5 segundos.
    //  7. Muestra un mensaje de éxito y resetea el formulario.
    //
    // Funciones adicionales:
    // Crea un objeto 'prices' con los precios de cada tipo de habitación.
    // Crea una función 'updatePrice' que calcula el precio total basado en la habitación seleccionada y el número de noches.
    // Asocia la función 'updatePrice' al evento 'change' del select de habitaciones (#selRooms) y al input de noches (#nights).
    // Ejecuta 'updatePrice' al cargar la página para mostrar el precio inicial (al menos una vez).

    // -- Register User Validation --
    $('#formularioRegistro').on('submit', function(e) {
        e.preventDefault();
        
        // Form & Button
        const form = $(this);
        const btn = form.find('button[type="submit"]');
        const originalText = btn.text();

        // Data
        const email = form.find('#email').val();

        // User Registration Check
        $.ajax({
            url: '../../api/users/api_users.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                btn.text('Registrando...').prop('disabled', true);

                // Check Email Existence
                const userExists = data.users.some(u => u.email === email);

                // Simulate Registration Process
                if (userExists) {
                    alert('Esta cuenta ya existe. Por favor digite otro correo electrónico.');
                    form[0].reset();
                    form.find('.is-valid').removeClass('is-valid');
                    btn.text(originalText).prop('disabled', false);
                } else {
                    setTimeout(function() {
                        alert('¡Registro completado correctamente! Bienvenido estimado cliente.');
                        window.location.href = "../../app/views/home.html";
                        form[0].reset();
                        form.find('.is-valid').removeClass('is-valid');
                        btn.text(originalText).prop('disabled', false);
                    }, 1500);
                }
            }
        });
    });

    // -- Reservation Form Funtionality --
    // Prices
    const prices = {
        estandar: 150,
        deluxe: 220,
        familiar: 300,
        presidencial: 450
    };

    // Function Dinamic Price
    function updatePrice() {
        // Get Room & Nights
        const room = $('#selRooms').val();
        const nights = parseInt($('#nights').val()) || 0;

        // Calculate Total
        if (room && prices[room] && nights > 0) {
            const priceNights = prices[room];
            const total = priceNights * nights;

            $('#totalPayment').val("$" + total.toLocaleString() + " USD");
        }
    }

    // Dinamic Price Event
    $('#selRooms').on('change', updatePrice);

    // Exec Reservation Price on Load
    updatePrice();

    // =========================================================
    // BOOTSTRAP — Inicialización de Tooltips
    // =========================================================
    // Activa todos los tooltips de Bootstrap en la página actual.
    // Para usar un tooltip en un elemento HTML, agregar:
    //   data-bs-toggle="tooltip" title="Texto del tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    // =========================================================
    // CHATBOT — Consultas Basicas:
    // precio, ubicacion, reserva, hola
    // =========================================================

    $('#chatbot-toggle').click(function () {
        $('#chatbot-box').toggle();
    });

    $('#chatbot-close').click(function () {
        $('#chatbot-box').hide();
    });

    $('#chatbot-send').click(function () {
        sendMessage();
    });

    $('#chatbot-text').keypress(function (e) {
        if (e.which === 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        const input = $('#chatbot-text');
        const message = input.val().trim();

        if (message === '') return;

        $('#chatbot-messages').append(`<div class="user-message">${message}</div>`);
        input.val('');

        // Respuesta
        setTimeout(function () {
            let response = "Lo siento, no entendí tu mensaje.";

            if (message.toLowerCase().includes('precio')) {
                response = "Nuestras habitaciones van desde $220 por noche.";
            } else if (message.toLowerCase().includes('ubicacion')) {
                response = "Estamos ubicados en Guanacaste, Playa Danta.";
            } else if (message.toLowerCase().includes('reserva')) {
                response = "Puedes reservar desde la sección de contacto.";
            } else if (message.toLowerCase().includes('hola')) {
                response = "¡Hola! ¿En qué puedo ayudarte?";
            }

            $('#chatbot-messages').append(`<div class="bot-message">${response}</div>`);

            // Scroll automático
            $('#chatbot-messages').scrollTop($('#chatbot-messages')[0].scrollHeight);

        }, 500);
    }

});
