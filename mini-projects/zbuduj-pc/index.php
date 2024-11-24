<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Kup se kompa</title>
</head>
<body>
    <div id="main">
        <div id="text">ZAMÓW KOMPUTER!!!</div>
        <form method="POST" action="zamow.php">
            <div id="list">
                <?php

                $plyta = [
                        // S1
                    'ASUS Prime B660M-A',
                    'ASUS TUF Gaming B660M-Plus',
                    'ASUS Rog Strix B550-A Gaming',
                        // S2
                    'GIGABYTE Gaming X B660M',
                    'GIGABYTE B550 Aorus Elite V2',
                    'GIGABYTE X570S Aero G',
                        //S3
                    'ASROCK B550 Extreme4',

                        //S4
                    'MSI Pro Z690-P DDR4',
                ];

                $procesor = [
                            // S1
                    'AMD Ryzen 5 3600',
                    'AMD Ryzen 5 5600',
                    'AMD Ryzen 7 5800',
                    'AMD Ryzen 9 5800',
                            // S2
                    'Intel Core i3-10100F',
                    'Intel Core i5-10400F',
                    'Intel Core i5-10400F',
                    'Intel Core i7-10700KF',
                            // S3
                    'Intel Core i5-12600K',
                    'Intel Core i9-12900K',
                            // S4
                    'Intel Core i5-9400F',
                    'Intel Core i5-9400KF',
                ];
                
                $karta = [
                    'GeForce RTX 3060',
                    'GeForce RTX 3070',
                    'Radeon RX 6900',
                    'Radeon RX 6650 XT',
                    'GeForce RTX 3060',
                ];
                

echo <<< END
    <br>
    <select name="select_plyta">
        <option value="">Wybierz płytę główną</option>
        // USUNAC VALUE
END;
                
                for($i=0 ; $i<count($plyta) ; $i++){
                    echo '<option value = "' . $plyta[$i] . '">' . $plyta[$i] . "</option>";
                }
                
echo <<< END
    </select>
    <br><br>
    <select name="select_procesor">
        <option value="">Wybierz procesor</option>
END;
                
                for($j=0 ; $j<count($procesor) ; $j++){
                    echo '<option value="' . $procesor[$j] . '">' . $procesor[$j] . "</option>";
                }
               
echo <<< END
    </select>
    <br><br>
    <select name="select_karta">
        <option value="">Wybierz karte grafczną</option>
END;
                
                for($m=0 ; $m<count($karta) ; $m++){
                    echo '<option value="' . $karta[$m] . '">' . $karta[$m] . "</option>";
                }
                
echo "</select><br><br>";

                ?>
                
                <input type="radio" name="pc" value="1"><img src="pc1.png" height="175px">
                <br>
                <input type="radio" name="pc" value="2"><img src="pc2.png" height="175px">
                <br>
                <input type="radio" name="pc" value="3"><img src="pc3.png" height="175px">
                <br>
                <input type="radio" name="pc" value="4"><img src="pc4.png" height="175px">
                <br><br><br>
                Dysk: <input type="number" name="dysk_rozmiar" min="120" max="8000"> GB
                <br>
                <input type="radio" name="dysk_typ" value="HDD">HDD
                <input type="radio" name="dysk_typ" value="SSD">SSD
                <br><br><br>
                <input type="checkbox" name="złóż"> Usługa złożenia komputera
            </div> 
            <div id="end">
                <input type="checkbox" required> Akceptuję umowę
                <br>
                <input type="submit">
            </div>
        </form>
        </div>
</body>
</html>