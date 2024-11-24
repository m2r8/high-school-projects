<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Kup se kompa</title>
</head>
<body>
    <div id="main">
        <?php
        
        $plyta = [
            // S1
        'ASUS Prime B660M-A' => 'S1',
        'ASUS TUF Gaming B660M-Plus' => 'S1',
        'ASUS Rog Strix B550-A Gaming' => 'S1',
            // S2
        'GIGABYTE Gaming X B660M' => 'S2',
        'GIGABYTE B550 Aorus Elite V2' => 'S2',
        'GIGABYTE X570S Aero G' => 'S2',
            //S3
        'ASROCK B550 Extreme4' => 'S3',

            //S4
        'MSI Pro Z690-P DDR4' => 'S4',
        ];

        $procesor = [
                // S1
            'AMD Ryzen 5 3600' => 'S1',
            'AMD Ryzen 5 5600' => 'S1',
            'AMD Ryzen 7 5800' => 'S1',
            'AMD Ryzen 9 5800' => 'S1',
                // S2
            'Intel Core i3-10100F' => 'S2',
            'Intel Core i5-10400F' => 'S2',
            'Intel Core i5-10400F' => 'S2',
            'Intel Core i7-10700KF' => 'S2',
                // S3
            'Intel Core i5-12600K' => 'S3',
            'Intel Core i9-12900K' => 'S3',
                // S4
            'Intel Core i5-9400F' => 'S4',
            'Intel Core i5-9400KF' => 'S4',
        ];

        $karta = [
            'GeForce RTX 3060' => '100',
            'GeForce RTX 3070' => '105',
            'Radeon RX 6900' => '110',
            'Radeon RX 6650 XT' => '115',
            'GeForce RTX 3060' => '120',
        ];
        
        $t = 1;
        $t2 = 1;
        
        if($_POST['select_plyta'] == ""){
            echo "Podaj Płytę główną<br>";
            $t=0;
        }
        
        if($_POST['select_procesor'] == ""){
            echo "Podaj Procesor<br>";
            $t=0;
        }
        
        if($_POST['select_karta'] == ""){
            echo "Podaj kartę graficzną<br>";
            $t2=0;
        }
        
        if($_POST['dysk_rozmiar'] == ""){
            echo "Podaj rozmiar dysku<br>";
            $t2=0;
        }else{
            
            if(($_POST['dysk_rozmiar'])/1<120 ){
                echo "Minimalny rozmiar dysku to 120GB<br>";
                $t2=0;
            }
            
            if(($_POST['dysk_rozmiar'])/1>8000){
                echo "Maksymalny rozmiar dysku to 8000GB<br>";
                $t2=0;
            }
        }
        
        if(isset($_POST['dysk_typ']) == FALSE){
            echo "Podaj typ dysku<br>";
            $t2=0;
        }
        
        if($t==1 && $plyta[$_POST['select_plyta']] == $procesor[$_POST['select_procesor']]){

        }else
        {
            echo"Podana płyta i procesor nie są kompatybilne";
            $t2=0;
        }
        if(isset($_POST['pc'])==FALSE){
            echo "Podaj obudowę<br>";
            $t2=0;
        }
        
        if($t==1 && $t2==1){
            echo $_POST['select_plyta'] . "<br>" .
            $_POST['select_procesor'] . "<br>" .
            $_POST['select_karta'] . "<br>" .
            $_POST['dysk_rozmiar'] . " " . $_POST['dysk_typ'] . "<br>".
            "Zalecana moc zasilacza to " . ($karta[$_POST['select_karta']])*1.25 . "W.";
            
            if(isset($_POST['złóż']) == TRUE){
                echo "<br>Komputer zostanie złożony.";  
            }
            echo '<br><img style="width:30%;" src="pc'. $_POST["pc"].'.png"';
        }
 
?>
</div>
</body>