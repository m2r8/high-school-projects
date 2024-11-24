<?php
    require_once "connect.php";
    session_start();

    echo "<!DOCTYPE html>
    <html lang='pl'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>
        <link rel='stylesheet' href='fontello/css/fontello.css'>
        <link rel='stylesheet' href='style_d.css'>
        <title>Biuro podróży</title>
    </head>
    <body>";
    unset($_SESSION['login_error']);
    if(isset($_SESSION['logged_user'])){
        $uzytkownik = $_SESSION['logged_user'];
        $polaczenie = @new mysqli($host, $db_user,$db_password,$db_name);
        $sql2 = "SELECT isAdmin FROM `users` WHERE login='$uzytkownik';";
        $result2 = mysqli_query($polaczenie, $sql2);
        while($show_result = mysqli_fetch_row($result2)){
            $AdminCheck = $show_result[0];
        }
        if($AdminCheck == 0) {
            echo "Panel użytkownika <br>";
            $polaczenie4 = @new mysqli($host, $db_user,$db_password,$db_name);
            $sql4 = "SELECT * FROM offer WHERE price <= (SELECT funds FROM users WHERE login = 'admin');";
            $result5 = mysqli_query($polaczenie4, $sql4);
            echo "<table>";
            echo "<tr>";
            echo "<tr>";
            echo "<td>ID</td>";
            echo "<td>Nazwa</td>";
            echo "<td>Miejsce docelowe</td>";
            echo "<td>Cena</td>";
            echo "<td>Akcje</td>";
            echo "</tr>";
            // $zmienna = "";
            while($myResult5 = mysqli_fetch_row($result5)) {
                echo "<tr>";
                echo "<td><input type='text' readonly value=".$myResult5[0]."></td>";
                echo "<td><input type='text' readonly value=".$myResult5[1]."></td>";
                echo "<td><input type='text' readonly value=".$myResult5[3]."></td>";
                echo "<td><input type='text' readonly value=".$myResult5[2]."></td>";
                echo "<td>
                <a href='order.php'>
                <form method='POST'action='order.php'>
                <input type='submit' name=".$myResult5[0].">
                </form>
                </a>
                </td>";
                echo "</tr>";
            }
            echo "</table>";
            $sql6 = "SELECT funds FROM `users` WHERE login='$uzytkownik'";
            $result6 = mysqli_query($polaczenie4,$sql6);
            while($siano = mysqli_fetch_row($result6)) {
                echo "<br>Twoje fundusze: ".$siano[0];
            }
        }else if($AdminCheck == 1){
            echo "Panel admina <br>";
            $polaczenie2 = @new mysqli($host, $db_user,$db_password,$db_name);
            $sql3 = "SELECT users.id, users.login, transactions.id, transactions.offer_id, transactions.date FROM users JOIN transactions ON users.id = transactions.user_id;";
            $result3 = mysqli_query($polaczenie2, $sql3);
            echo "</br>";
            echo "<table>";
            echo "<tr>";
            echo "<td>ID</td>";
            echo "<td>ID użytkownika</td>";
            echo "<td>Login</td>";
            echo "<td>ID oferty</td>";
            echo "<td>Data</td>";
            echo "</tr>";
            while($myResult3 = mysqli_fetch_row($result3)){
                echo "<tr>";
                echo "<td>".$myResult3[2]."</td>";
                echo "<td>".$myResult3[0]."</td>";
                echo "<td>".$myResult3[1]."</td>";
                echo "<td>".$myResult3[3]."</td>";
                echo "<td>".$myResult3[4]."</td>";
                echo "</tr>";
            }
            echo "</table>";
            echo "</br>";
        }
    }else{
        echo "<p style='margin-top: 50vh; margin-left: 45vw; font-size: 40px;'>Zaloguj się najpierw!</p>";     
    }
    echo "<br><br><a href='logout.php' name='link' style='color: black; font-size:22px; margin-left:60vw;'>Wyloguj się</a>";
    echo "</body></html>"
    ?>

 