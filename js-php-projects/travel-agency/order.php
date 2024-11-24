<?php
    require_once "connect.php";
    session_start();
    $uzytkownik = $_SESSION['logged_user']; 
    $connect6 = new mysqli($host, $db_user,$db_password,$db_name);
    $sql6 = "SELECT id FROM users WHERE login = '$uzytkownik'";

    $id = mysqli_query($connect6,$sql6);
    while($show_result6 = mysqli_fetch_row($id)){
        $idUzytkownika = $show_result6[0];
    }
    foreach($_POST as $name => $content) { 
        $name;
    }
    $data = date("Y-m-d H:i:s");
    $sql7 = "INSERT INTO `transactions`(`user_id`, `offer_id`, `date`) VALUES ('$idUzytkownika','$name','$data')";
    $result7 = mysqli_query($connect6, $sql7);
    $sql8 = "UPDATE users SET funds = funds - (SELECT price FROM offer WHERE id = $name) WHERE id = $idUzytkownika";
    mysqli_query($connect6,$sql8);

    echo "<!DOCTYPE html>
    <html lang='pl'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>
        <link rel='stylesheet' href='fontello/css/fontello.css'>
        <link rel='stylesheet' href='style.css'>
        <title>Biuro podróży</title>
    </head>
    <body>
        <h1 style='margin-top: 50vh; margin-left: 35vw; font-size: 40px;'>Wycieczka została kupiona! 🥳</h1>
        <a href='dashboard.php' style='color: black; font-size:22px; margin-left:60vw;'>Powrot</a>
    </body>
    </html>";
?>