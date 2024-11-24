<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <title>Piekarnia Ratatuj</title>
    </head>
    <body>
    <form method="POST" action="podsumowanie.php">
        <div id="main">
            <div id="formularz">
                <h1>Piekarnia Ratatuj</h1>
                <?php
                    $lista=["Wybierz produkt" , "Chleb spychany" , "Chleb bananowy" , "Chleb orkiszowy" , "Bułka pszenna" , "Rogal maślany"];
                    for($i = 0 ; $i < count($lista)-1 ; $i++){
                        echo "<div><select name='item[$i]'>";
                        for($j=0;$j<sizeof($lista);$j++){
                            echo "<option> $lista[$j] </options>";
                        }
                        echo "</select> <input type='number' name='ilosc[$i]'> </div>";
                    }
                ?>
                <div id="regulamin">
                    <input type="checkbox" name="regulamin" required>Akceptuje regulamin sklepu</color>
                </div> 
                <input type="submit" value="Zamów">
            </div>
        </div>
    </form>
    </body>
</html>