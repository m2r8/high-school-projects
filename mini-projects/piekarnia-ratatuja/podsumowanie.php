<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <title>Piekarnia Ratatuj</title>
    </head>
<body>
    <?php
echo <<< END
    <h1>Piekarnia Ratatuj</h1>
    <div id="main2">
        <div id="tab1">
            <div><h2>Produkt</h2></div>
            <div><h2>Ilość</h2></div>
        </div>
        <div id="tab2">
END;
        for($i = 0 ; $i < count($_POST['item']) ; $i++){
            if($_POST['item'][$i] && $_POST['ilosc'][$i] && $_POST['item'][$i]!='Wybierz produkt'){
                echo '<div id="dane"><h3>' . $_POST['item'][$i] . '</h3><h3>' . $_POST['ilosc'][$i] . '</h3></div>';
            }
        }
        echo '</div>';
    ?>
</body>
</html>