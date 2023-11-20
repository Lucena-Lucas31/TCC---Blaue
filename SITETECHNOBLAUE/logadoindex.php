<?php 
    session_start(); 
    include("conexao.php");


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Techno Blaue</title>
    <link rel="stylesheet" href="index.css">
    <script defer src="index2.js"></script>
</head>
<body>


    <!--ESSA DIV "container" É COMO SE FOSSE O MAIN, ENGLOBA TUDO QUE ESTÁ NA TELA -->
    <div class="container" id="blur">
        <!-- BARRA DE MENU (LOGO, MENU E O BUTTON)-->
        <div class="navbar">
            

            <nav>

                <a href="logadoindex2.php"><img src="../SITETECHNOBLAUE/images/logo.png" alt="logo" class="logo" id="logo"></a>

                <ul>
                    <li style="border: 2.5px solid var(--selpage-color); border-radius: 10px; padding: 5px;"><a href="logadoindex2.php" style="text-decoration: none;">HOME</a></li>
                    <li><a href="sobrelogado.php">SOBRE</a></li>
                    <li><a href="equipelogado.php">EQUIPE</a></li>
                    <li><a href="jogologado.php">JOGO</a></li>
                    <li><a href="relatorio.php">RELATÓRIO</a></li>
                </ul>

                <label class="switch">
                    <input type="checkbox" id="btnmodo" checked >
                    <span class="slider round"></span>
                    <img src="images/solzinho.png" alt="" class="imgsol" id="btnIcon">
                </label>

                <div class="divopenbtn"></div>




                <?php
                

$_SESSION['nomeresponsavel'] = "";


$Email = $_POST['EmailLogin'];
$Senha = $_POST['SenhaLogin'];


$consulta = $pdo->prepare("SELECT * from clientes WHERE email ='$Email' AND senha = '$Senha';");
$consulta->execute();


while ($linha = $consulta->fetch(PDO::FETCH_BOTH)) {

$_SESSION['nomeresponsavel'] = $linha['nome_responsavel'];
$_SESSION['idresponsavel'] = $linha['id'];


}

  if($_SESSION['nomeresponsavel'] == "")
  {
    header("location:index.php");
  }
                else
                {
                    echo '<button class="openbtn">'. $_SESSION['nomeresponsavel'] . '</button>';
                    
                }
            

                ?>
            </nav>

            
            <!-- OVERLAY DE DESLOGAR-->
            <div id="deslogOverlay" class="overlayDeslog">
                <div class="content">
                    <img src="images/logoOverlay.png" alt="logo" class="logoOverlayDeslog">
                    <h1 class="overTitleDeslogOverlay">Gostaria de sair da sua conta?</h1>
                    <a href="index.php"><button class= "deslogar">SAIR</button></a>
                    <buttton  class= "cancel" onclick = "deslogClose();"> CANCELAR</button>
                  
       
                </div>
            </div>


        </div>

            <div class="container-principal">

          
                <!-- DIV QUE ABRIGA OS TEXTOS DO MEIO DA TELA E O PARÁGRAFO -->
                <div class="texts">
                    <div class="text-1">
                        <h1>BEM-VINDO À</h1>
                    </div>

                <div class="text-2">
                    <h1>TECHNO BLAUE</h1>
                </div>

                <div class="text-3">
                    <p>Tecnologia integrada a pesquisas médicas para o melhor no seu dia a dia de forma acessível e prática. Tudo aquilo que você precisa pensado nos mínimos detalhes e criado especialmente para atendê-lo.</p>
                </div>
            </div>

                <div >
                    <a href="sobrelogado.php"><button class="saibamaisbtn">SAIBA MAIS ></button></a>
                </div>

                <img src="../SITETECHNOBLAUE/images/handandbrain.png" alt="ilustration" class="brain">

                <div class="social-links">
                    <a href="https://www.instagram.com/technoblaue/" target="blank"><img src="../SITETECHNOBLAUE/images/instaicon.png" alt="instagram" class="insta"></a>
                    <a href="tel:+55 11 98689-9589" target="blank"><img src="../SITETECHNOBLAUE/images/wppicon.png" alt="whatsapp" class="whats"></a>
                    <a href="mailto:technoblaue@gmail.com" target="blank"><img src="../SITETECHNOBLAUE/images/emailicon.png" alt="email" class="email"></a>
                </div>

                 <!--BOTÃO PARA ABRIR O OVERLAY DE DESLOGAR-->
            <div class= "logout" onclick="deslogOpen()"; >
                    <img class= "imgLogout" src="images/logout.png" alt="">
                    <h4 class = "logOutText">SAIR</h4>
                </div>
     
                
            </div>

            
    </div>

  
</body>
</html>