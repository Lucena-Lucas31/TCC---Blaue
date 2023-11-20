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
    <link rel="stylesheet" href="relatorio.css">
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
                    <li><a href="equipelogado.php">EQUIPE</a></li>
                    <li><a href="jogologado.php">JOGO</a></li>
                    <li  style="border: 2.5px solid var(--selpage-color); border-radius: 10px; padding: 5px;"><a href="relatorio.php" style="text-decoration: none;">RELATÓRIO</a></li>
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
                        <?php
                                echo "<p>Paciente: " . $_SESSION['nomepaciente'] . "</p>" 
                        ?>
                         <!-- Parte do banco aqui (coitados kkkk) pfv nn quebra mais o site --></p>
                    </div>

                
                </div>
                
                




                <div class="retanguloAzul">


                <table class="table table-striped">


                    <tr>

                    <th> <div class="divdata">DATA</div> </th>
                    <th> <div class="divtempo">TEMPO</div> </th>
                    <th> <div class="divmodo">MODO DE JOGO</div> </th>
                    <th> <div class="divpontuacao">PONTUAÇAO</div> </th>

                    </tr>

                    
                <?php

                $jogador = $_SESSION['idpaciente'];

                    

                    $consulta = $pdo->prepare("SELECT * from games WHERE id_jogador = '$jogador' order by id");
                    $consulta->execute();

                   while ($linha = $consulta->fetch(PDO::FETCH_BOTH)) {
            
                        echo "<tr>";
                                                  //  echo "<td>" . $linha["hora"] . "</td>";
                                                    echo "<td>" . $linha["id"] . "</td>";      
                                                    echo "<td>" . $linha["timer"] . "</td>";   
                                                    echo "<td>" . $linha["modo_jogo"] . "</td>";   
                                                    echo "<td>" . $linha["pontuacao"] . "</td>";   
                        echo "</tr>"    ;                       

                
                }
                ?>    


                    </table>
                </div>

                <div class="social-links">
                    <a href="https://www.instagram.com/technoblaue/" target="blank"><img src="../SITETECHNOBLAUE/images/instaicon.png" alt="instagram" class="insta"></a>
                    <a href="tel:+55 11 98689-9589" target="blank"><img src="../SITETECHNOBLAUE/images/wppicon.png" alt="whatsapp" class="whats"></a>
                    <a href="mailto:technoblaue@gmail.com" target="blank"><img src="../SITETECHNOBLAUE/images/emailicon.png" alt="email" class="email"></a>
                </div>

                <div class="listaconsulta">
                    <label for="i1" class="labelrelatorio1">TODAS AS PARTIDAS</label>
                    <input type="radio" name="l1" id="i1" class="listarelatorio1" value="100">
                </div>

                <div class="listaconsulta">
                    <label for="i2" class="labelrelatorio2">ÚLTIMAS 10 PARTIDAS</label>
                    <input type="radio" name="l1" id="i2" class="listarelatorio2" value="10">
                </div>

                <div class="listaconsulta">
                    <label for="i3" class="labelrelatorio3">ÚLTIMAS 15 PARTIDAS</label>
                    <input type="radio" name="l1" id="i3" class="listarelatorio3" value="15">
                </div>

                <div class="listaconsulta">
                    <label for="i4" class="labelrelatorio4">ÚLTIMAS 20 PARTIDAS</label>
                    <input type="radio" name="l1" id="i4" class="listarelatorio4" value="20">
                </div>

                <a href=""><button class="baixarbtn">BAIXAR EM PDF</button></a>
                
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

        <form action="">

            <label for="Email" class="label1">EMAIL</label>
            <input type="text" name="Email" id="email" class="textbox1" placeholder="exemplo@exemplo.com">

            <label for="Senha" class="label2">SENHA</label>
            <input type="password" name="Senha" id="password" class="textbox2" placeholder="Insira sua senha">
 
            
            <input type="submit" name="Submit" id="submit" value="ENTRAR">
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

        <form action="">

            <!--Coluna esquerda dos campos de cadastro-->
            <div class="leftinputflex">

                <label for="Email" class="labelregister">EMAIL</label>
                <input type="text" name="Email" id="email" placeholder="exemplo@exemplo.com" class="textregister">

                <label for="NameR" class="labelregister">NOME DO RESPONSÁVEL</label>
                <input type="text" name="NameR" id="NameR" placeholder="Insira o nome" class="textregister">

                <label for="Tel" class="labelregister">TELEFONE DO RESPONSÁVEL</label>
                <input type="text" name="Tel" id="tel" placeholder="(xx)xxxxx-xxxx" class="textregister">

            </div>

            <!--Coluna direita dos campos de cadastro-->
            <div class="rightinputflex">

                <label for="NameP" class="labelregister">NOME DO PACIENTE</label>
                <input type="text" name="NameP" id="NameP" placeholder="Insira o nome" class="textregister">

                <label for="stage" class="labelregister">ESTÁGIO DO ALZHEIMER</label>
                <select id="stage" name="alzheimerStageList" form="stageForm" class="textregister2">
                    <option value="sel" class="estagioscadastro">Selecione o estágio</option>
                    <option value="1" class="estagioscadastro">Estágio 1</option>
                    <option value="2" class="estagioscadastro">Estágio 2</option>
                </select>

                <label for="Senha" class="labelregister">SENHA</label>
                <input type="password" name="Senha" id="password" placeholder="Insira sua senha" class="textregister">

            </div>
           

            
        <div class="overlaycadastrarbtn">
            <input type="submit" name="submit" id="submit" value="CADASTRAR">
        </div>

        </form>

        <a href="psi.php"><span class="openPsi" title="Políticas de Segurança"> ACESSE NOSSA POLÍTICA DE SEGURANÇA </span></a>
        
        </div>
    </div>
</div>

</body>
</html>