<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sprawdzian</title>
</head>
<body>
    <div id="container">
        <header>
            <h1>Odloty z lotniska</h1>
            <img src="./airplane.svg"/>
        </header>

        <main>
            <section>
                <?php
                    $conn = new PDO('mysql: host=localhost; dbname=lotnisko','root','');
                    $kw = "SELECT * FROM odloty ORDER BY czas DESC";
                    $sql = $conn->query($kw);
                    $fetch = $sql->fetchAll();
                    $licznik = 1;
                    echo "<table>";
                    echo "<th>LP</th>
                    <th>NUMER REJSU</th>
                    <th>CZAS</th>
                    <th>KIERUNEK</th>
                    <th>STATUS</th>";
                    foreach($fetch as $row){
                        echo "<tr>";
                        echo "<td>$licznik</td>";
                        echo "<td>$row[2]</td>";
                        echo "<td>$row[4]</td>";
                        echo "<td>$row[3]</td>";
                        echo "<td>$row[6]</td>";
                        echo "</tr>";
                        $licznik++;
                    }
                    echo "</table>";
                    $conn = null;
                ?>
            </section>
        </main>

        <footer>
            <p>Sprawdzian - komunikacja z bazą danych</p>
        </footer>
    </div>
</body>
</html>
<!-- SELECT * FROM `odloty` ORDER BY `czas` DESC; -->