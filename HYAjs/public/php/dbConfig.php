<?php
// Conexão com banco
$dbHost     = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName     = "tcc_blaue";

// Criar conexão
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Checar conexão
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>