<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteka miejska</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="baner">
        <h2>Miejska Bibliotek Publiczna w Książkowicach</h2>
    </div>
<div id="main">    
    <div id="lewy">
        <h3>W naszych zbiorach znajdziesz dzieła następujących autorów</h3>

            <?php
                $baza = new PDO("mysql:host=localhost;dbname=biblioteka;","root","");
                $dane = $baza->query("SELECT `imie`,`nazwisko` FROM `autorzy`");
                $dane2 = $dane->fetchAll();
                echo "<ul>";
                foreach($dane2 as $rows){
                    echo "<li>";
                    echo $rows[0] . " " . $rows[1];
                    
                }
                echo "</ul>";
                
            ?>
    </div>
    <div id="srodek">
        <h3>Dodaj nowego czytelnika</h3>
        <form method="POST">
            imie:<input type="text" name="imie"><br>
            nazwisko:<input type="text" name="nazwisko"> <br>
            rok urodzenia:<input type="number" name="rok"><br>
            <input type="submit" value="DODAJ">  
        </form>  
                <?php
                
                    $imie = $_POST["imie"];
                    $nazwisko = $_POST["nazwisko"];
                    $rok = $_POST["rok"];
                    echo "<h3>Czytelnik: " . $imie . " " . $nazwisko . " został dodany do bazy danych</h3>";
                    $imie = substr($imie,0,2);
                    $nazwisko = substr($nazwisko,0,2);
                    $rok = substr($rok,2,3);
                    $imie = strtoupper($imie);
                    $nazwisko = strtoupper($nazwisko);
                    $kod = $imie.$nazwisko.$rok;
                   $imie2 = $_POST["imie"];
                   $nazwisko2 = $_POST["nazwisko"];
                   $baza->exec("INSERT INTO `czytelnicy`(`imie`,`nazwisko`,`kod`) VALUES('$imie2','$nazwisko2','$kod')");
                   
                   $baza = null;
                ?>
    </div>
    <div id="prawy">
        <img src="biblioteka.png" alt="książki">
        <h4>ul. Czytelnicza 25<br> 12-120 Ksiązkowice<br> tel.:123123123<br> e-mail:<a href="mailto:biuro@bibliotek.pl"> biuro@bibliotek.pl</a></h4>
    </div>
</div>    
    <div id="stopka">
         <p>Projekt strony: 00000000000</p>       
    </div>
</body>
</html>