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
    <link rel="stylesheet" href="equipe.css">
    <script defer src="index.js"></script>
</head>
<body>

    <!--ESSA DIV "container" É COMO SE FOSSE O MAIN, ENGLOBA TUDO QUE ESTÁ NA TELA -->
    <div class="container" id="blur">
        <!-- BARRA DE MENU (LOGO, MENU E O BUTTON)-->
        <div class="navbar">
            

            <nav>

                <a href="logadoindex2.php"><img src="../SITETECHNOBLAUE/images/logo.png" alt="logo" class="logo" id="logo"></a>

                <ul>
                    <li><a href="logadoindex2.php">HOME</a></li>
                    <li><a href="sobrelogado.php">SOBRE</a></li>
                    <li style="border: 2.5px solid var(--selpage-color); border-radius: 10px; padding: 5px;"><a href="equipelogado.php" style="text-decoration: none;">EQUIPE</a></li>
                    <li><a href="jogologado.php">JOGO</a></li>
                    <li><button class="btnRt"><a href="relatorio.php">RELATÓRIO</a></button></li>
                </ul>

                <label class="switch">
                    <input type="checkbox" id="btnmodo" checked >
                    <span class="slider round"></span>
                    <img src="images/solzinho.png" alt="" class="imgsol" id="btnIcon">
                </label>

                <div class="divopenbtn"></div> 
                <?php 
                 echo "<button class='openbtn' id='openbtn'>" . $_SESSION['nomeresponsavel'] . "</button>"
                ?>
                
                                 

            </nav>

        </div>

            <div class="container-principal">
     
                <!-- DIV QUE ABRIGA OS TEXTOS DO MEIO DA TELA E O PARÁGRAFO -->
                <div class="texts">
                    <div class="text-1">
                        <h1>CONHEÇA NOSSO TIME</h1>
                    </div>

                    <div class="text-2">
                        <p>Saiba mais sobre cada pessoa que faz tudo isso possível</p>
                    </div>

                    <div class="text-3-1">
                        <p>UX/UI DESIGN</p>
                    </div>

                    <div class="text-3-2">
                        <p>PROGRAMAÇÃO FRONT-END</p>
                    </div>

                    <div class="text-3-3">
                        <p>PROGRAMAÇÃO BACK-END</p>
                    </div>

                    <div class="text-3-4">
                        <p>BANCO DE DADOS</p>
                    </div>

                </div>

                <div class="people">

                    <!-- DESIGNERS -->
                    <!-- ANA -->
                    <img src="images/Ana.png" alt="ana" class="imgana1">
                    <div class="bioana1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">ANA LESSA</p>
                        <p class="text-5">UX/UI Designer | PO</p>
                    </div>

                    <!-- NAOMI -->
                    <img src="images/naomi.png" alt="" class="imgnaomi1">
                    <div class="bionaomi1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">JULIANA LIMA</p>
                        <p class="text-5">UX/UI Designer | Ilustradora</p>
                    </div>

                    <!-- RAÍNE -->
                    <img src="images/raine.png" alt="" class="imgraine1">
                    <div class="bioraine1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">RAÍNE NERES</p>
                        <p class="text-5">UX/UI Designer | Scrum Master</p>
                    </div>


                    <!-- FRONT -->
                    <!-- JUH MURAKAMI -->
                    <img src="images/juh.png" alt="ana" class="imgju1">
                    <div class="bioju1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">JULIANA MURAKAMI</p>
                        <p class="text-5">Programadora Fullstack</p>
                    </div>

                    <!-- LEO -->
                    <img src="images/leo.png" alt="ana" class="imgleo1">
                    <div class="bioleo1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">LEONARDO SCARPARO</p>
                        <p class="text-5">Programador Fullstack</p>
                    </div>

                    <!-- LE -->
                    <img src="images/le.png" alt="ana" class="imgle1">
                    <div class="biole1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">LETÍCIA SUDAN</p>
                        <p class="text-5">Programadora Fullstack</p>
                    </div>


                    <!-- BACK -->
                    <!-- JUH MURAKAMI -->
                    <img src="images/juh.png" alt="ana" class="imgju2">
                    <div class="bioju2"> <!-- BIO DA PESSOA -->
                        <p class="text-4">JULIANA MURAKAMI</p>
                        <p class="text-5">Programadora Fullstack</p>
                    </div>

                    <!-- LEO -->
                    <img src="images/leo.png" alt="ana" class="imgleo2">
                    <div class="bioleo2"> <!-- BIO DA PESSOA -->
                        <p class="text-4">LEONARDO SCARPARO</p>
                        <p class="text-5">Programador Fullstack</p>
                    </div>

                    <!-- LE -->
                    <img src="images/le.png" alt="ana" class="imgle2">
                    <div class="biole2"> <!-- BIO DA PESSOA -->
                        <p class="text-4">LETÍCIA SUDAN</p>
                        <p class="text-5">Programadora Fullstack</p>
                    </div>


                    <!-- BANCO -->
                    <!-- LUCAS -->
                    <img src="images/lu.png" alt="ana" class="imglu1">
                    <div class="biolu1"> <!-- BIO DA PESSOA -->
                        <p class="text-4">LUCAS SAMPAIO</p>
                        <p class="text-5">Administrador BD</p>
                    </div>

                </div>

                <div class="social-links">
                    <a href="https://www.instagram.com/technoblaue/" target="blank"><img src="../SITETECHNOBLAUE/images/instaicon.png" alt="instagram" class="insta"></a>
                    <a href="tel:+55 11 98689-9589" target="blank"><img src="../SITETECHNOBLAUE/images/wppicon.png" alt="whatsapp" class="whats"></a>
                    <a href="mailto:technoblaue@gmail.com" target="blank"><img src="../SITETECHNOBLAUE/images/emailicon.png" alt="email" class="email"></a>
                </div>

                <!-- ESSA DIV SERVE LITERALMENTE SÓ PRA EU CONSEGUIR DESCER A TELA DO CONTAINER BRANCO ATÉ ONDE EU QUISER -->
                <div class="gambiarra">.</div>
                
            </div>
    </div>

    
             <!--OVERLAY DE LOGIN-->
 <div id="signinOverlay" class="sgOverlay">
    <!--BOTÃO PARA FECHAR O OVERLAY, CHAMA A FUNÇÃO QUE FAZ ISSO NO JS = closeForm()-->
    <span class="closebtn" onclick="closeForm(); toggle()" title="Close Overlay"> &#215 </span>


    <!--Engloba todo o conteúdo do overlay-->
    <div class="wrap" id="wrap">

        <!--Engloba o conteúdo do lado esquerdo do overlay-->
        <div class="left">
            <img src="images/logoOverlay.png" alt="logo" class="logoOverlay">

            <h3>AINDA NÃO TEM</h3>
            <h3>CADASTRO?</h3>

            <button class="registerOverlaybtn" onclick="closeForm(); openRegisterForm();">CADASTRE-SE</button>
  
        </div>

        <!--Engloba o conteúdo do lado direito do overlay-->
        <div class="right">
                
                    <h2>BEM VINDO</h2>
                    <h2 class="h2">DE VOLTA!</h2>

        <form action="logadoindex.php" method="POST">

        <label for="Email" class="label1">EMAIL</label>
            <input type="text" name="EmailLogin" id="EmailLogin" class="textbox1" placeholder="exemplo@exemplo.com">

            <label for="Senha" class="label2">SENHA</label>
            <input type="password" name="SenhaLogin" id="PasswordLogin" class="textbox2" placeholder="Insira sua senha">
 
            
            <input type="submit" name="Submit" id="SubmitLogin" value="ENTRAR">
        </form>
        </div>
    </div>
</div>
    


    <!--OVERLAY DE CADASTRO-->
 <div id="signinRegisterOverlay" class="sgRegisterOverlay">
    <!--BOTÃO PARA FECHAR O OVERLAY, CHAMA A FUNÇÃO QUE FAZ ISSO NO JS = closeForm()-->
    <span class="closebtn" onclick="closeRegisterForm(); toggle()" title="Close Overlay"> &#215 </span>

    <!--Engloba todo o conteúdo do overlay-->
    <div class="wrapRegister" id="wrapRg">

        <!--Engloba o conteúdo do lado esquerdo do overlay-->
        <div class="leftRg">
            <img src="images/logoOverlay.png" alt="logo" class="logoOverlay">

            <h3 class="h3register">JÁ TEM CADASTRO?</h3>

            <a href=""><button class="registerOverlaybtn2">ENTRAR</button></a>

            <ul class="ul1">Sua senha deve conter:
                <li>Seis dígitos no mínimo</li>
                <li>Uma letra maiúscula e minúscula</li>
            </ul>
        </div>

        <!--Engloba o conteúdo do lado direito do overlay-->
        <div class="rightRg">
                
                    <h2 class="h2register">SEJA BEM VINDO!</h2>

                    <form action="insercao.php" method="POST">

            <!--Coluna esquerda dos campos de cadastro-->
            <div class="leftinputflex">

                <label for="Email" class="labelregister">EMAIL</label>
                <input type="text" name="EmailCadastro" id="EmailCad" placeholder="exemplo@exemplo.com" class="textregister">

                <label for="NameR" class="labelregister">NOME DO RESPONSÁVEL</label>
                <input type="text" name="namer" id="NameR" placeholder="Insira o nome" class="textregister">

                <label for="Tel" class="labelregister">TELEFONE DO RESPONSÁVEL</label>
                <input type="text" name="tell" id="tel" placeholder="(xx)xxxxx-xxxx" class="textregister">

            </div>

            <!--Coluna direita dos campos de cadastro-->
            <div class="rightinputflex">

                <label for="NameP" class="labelregister">NOME DO PACIENTE</label>
                <input type="text" name="namep" id="NameP" placeholder="Insira o nome" class="textregister">

                <label for="stage" class="labelregister">ESTÁGIO DO ALZHEIMER</label>
                <select id="stage" name="estagio" form="stageForm" class="textregister2">
                    <option value="" class="estagioscadastro">Selecione o estágio</option>
                    <option value="Estagio_1" class="estagioscadastro">Estágio 1</option>
                    <option value="Estagio_2" class="estagioscadastro">Estágio 2</option>
                </select>

                <label for="Senha" class="labelregister">SENHA</label>
                <input type="password" name="SenhaCadastro" id="PasswordCad" placeholder="Insira sua senha" class="textregister">

            </div>

            <input type= "text" id = "estagio" name= "estagio2" class = "hidden"> 
           

            
            <div class="overlaycadastrarbtn">
            <input type="submit" name="submit" id="SubmitCad" value="CADASTRAR" onclick="getAndSetText(), getNomeLogin()" src="index.js">

        </div>

        </form>

        <a href="psi.php"><span class="openPsi" title="Políticas de Segurança"> ACESSE NOSSA POLÍTICA DE SEGURANÇA </span></a>
        
        </div>
    </div>
</div>



</body>
</html>