
<?php

$id = $_POST['user'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$ConfSenha = $_POST['Confsenha'];

$servername = "localhost";
$database = "usuários"; 
$username = "root";
$password = "";
// Criar conexão
$conn = mysqli_connect($servername, $username, $password, $database);
// Verifique a conexão
if (!$conn) {
      die("Falha na conexão: " . mysqli_connect_error());
}
  
echo "Conectado com sucesso";
  
$sql = "INSERT INTO users (ID, Usuario, Email,Senha) VALUES ($id, $email, $senha,$ConfSenha)";
if (mysqli_query($conn, $sql)) {
      echo "Novo registro criado com sucesso";
} else {
      echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>