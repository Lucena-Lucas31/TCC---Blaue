<?php 
    $cad = 0;
  
    include("conexao.php");

    $email = $_POST['EmailCadastro'];
    $namep = $_POST['namep'];
    $namer = $_POST['namer'];
    $estagio = $_POST['estagio2'];
    $tell = $_POST['tell'];
    $senha = $_POST['SenhaCadastro'];

    $consulta = $pdo->prepare("SELECT * from clientes where email ='$email' AND senha = '$senha' ");
    $consulta->execute();

   while ($linha = $consulta->fetch(PDO::FETCH_BOTH)) {

    if($linha['email'] == $email){
        
        $cad = 1;

        header("location:index.php");

    }else{}        
}

if ($cad == 0) {

    $inserir = $pdo->prepare("insert into clientes (email,nome_paciente,nome_responsavel,estagio,tell,senha)
                     values ('$email', '$namep', '$namer', '$estagio', '$tell', '$senha')");
    $inserir->execute();

        
    
    header("location:index.php");

    } 

 

?>

