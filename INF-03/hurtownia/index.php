<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <title>Hurtownia papiernicza</title>
</head>
<body>
    <div id="main">
        <div id="banner">
            <h1>W naszej hurtowni kupisz najtaniej</h1>
        </div>
        <div id="center">
            <div id="left">
                <h3>Ceny wybranych artykułów w hurtowni:</h3>
                <table>
                    <?php
                    $conn = mysqli_connect('localhost','root','','sklep');
                    $kw = "SELECT `nazwa`,`cena` FROM `towary` limit 4";
                    $sql = mysqli_query($conn, $kw);
                    foreach($sql as $opcja){
                        echo "<tr><td>".$opcja['nazwa']."</td><td>".$opcja['cena']." zł</td></tr>";
                    }
                    ?>
                </table>
            </div>
            <div id="mid">
                <h3>Ile będą kosztować Twoje zakupy?</h3>
                <br>
                <form action="" method="post">
                wybierz artykuł <select name="produkt">
                    <option>Zeszyt 60 kartek</option>
                    <option>Zeszyt 32 kartki</option>
                    <option>Cyrkiel</option>
                    <option>Linijka 30 cm</option>
                    <option>Ekierka</option>
                    <option>Linijka 50 cm</option>
                </select>
                <br>
                liczba sztuk: <input type="number" name="sztuki" value="1">
                <br>
                <input type="submit" value="OBLICZ">
                </form>
                <?php
                if(isset($_POST['produkt'])&&isset($_POST['sztuki'])){
                    $produkt = $_POST['produkt'];
                    $sztuki = $_POST['sztuki'];
                    $kw2 = "SELECT `cena` FROM `towary` WHERE `nazwa`='$produkt'";
                    $sql = mysqli_query($conn, $kw2);
                    $op = mysqli_fetch_assoc($sql);
                    $cena = round($sztuki * $op['cena'],1);
                    echo $cena;
                    mysqli_close($conn);
                }
                ?>
            </div>
            <div id="right">
                <img src="zakupy2.png" alt="hurtownia">
                <h3>Kontakt</h3>
                <p>
                    telefon:<br>
                    111222333<br>
                    e-mail:<br>
                    <a href="mailto:hurt@wp.pl">hurt@wp.pl</a>
                </p>
            </div>
        </div>
        <div id="footer">
            <h4>Witrynę wykonała: Marysia Rek</h4>
        </div>
    </div>
</body>
</html>