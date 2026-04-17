<!--
    * api_users.php — API Simulada para Usuarios
    * Hotel Brisa del Pacífico
    * 
    * Este archivo PHP simula una API que devuelve un listado de usuarios en formato JSON.
    * Está diseñado para ser consumido por el frontend (main.js) durante el proceso de login.
    * 
    * Estructura del Código:
    * 1. Definición de un array de usuarios con campos: name, email y password (quemados para demostración).
    * 2. Configuración de la cabecera para indicar que la respuesta es JSON.
    * 3. Codificación del array de usuarios en formato JSON y envío como respuesta.
    * 
    * Nota: En un entorno real, los datos de los usuarios no deberían estar quemados ni almacenados en texto plano.
    *       Este ejemplo es una pequeña simulación de una API para fines demostración del proyecto.
 -->

<?php
// Users Array (Hardcoded for demonstration)
$dataUsers = [
    ["name" => "Admin", "email" => "admin123@gmail.com", "password" => "admin123"],
    ["name" => "Manfred Mora", "email" => "user1@example.com", "password" => "password1"],
    ["name" => "Emerson Bolaños", "email" => "user2@example.com", "password" => "password2"],
    ["name" => "Manfreth Campos", "email" => "user3@example.com", "password" => "password3"],
    ["name" => "Katalina Chacón", "email" => "user4@example.com", "password" => "password4"],
];

// Return JSON Response
header('Content-Type: application/json'); 
echo json_encode([
    "success" => true,
    "users" => $dataUsers
]);
?>