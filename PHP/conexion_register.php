<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "movedb"; 


    $username_input = $_POST["username"] ?? '';
    $password_input = $_POST["password"] ?? '';
    $email_input = $_POST["email"] ?? '';
    $nombre_input = $_POST["nombre"] ?? '';
    $apellido_input = $_POST["apellido"] ?? '';

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }
    else{
        echo "Conexion exitosa";
    }

    $sql = "INSERT INTO users (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $username_input, $password_input, $email_input, $nombre_input, $apellido_input);
    
    if ($stmt->execute()) {
        echo "Datos insertados correctamente";
    } else {
        echo "Error al insertar datos: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
