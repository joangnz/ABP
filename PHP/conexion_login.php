<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "movedb"; 

// Obtener los datos del formulario
$username_input = $_GET["username"] ?? '';
$password_input = $_GET["password"] ?? '';

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Preparar consulta para verificar si el usuario existe
$sql = "SELECT * FROM users WHERE username = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username_input, $password_input);

// Ejecutar consulta
$stmt->execute();
$result = $stmt->get_result();

// Verificar si se encontró al usuario
if ($result->num_rows > 0) {
    echo "Usuario encontrado. ¡Registro exitoso!";
} else {
    echo "Nombre de usuario o contraseña incorrectos.";
}

$stmt->close();
$conn->close();
