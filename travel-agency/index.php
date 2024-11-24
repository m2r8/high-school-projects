<?php
    session_start();
    if(isset($_SESSION['login_error'])){
        $error = $_SESSION['login_error'];
    }
    if(isset($_SESSION['logged_user'])) {
        if($_SESSION['logged_user'] == null) {

        }else{
            header("Location: dashboard.php");
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <link rel="stylesheet" href="style.css">
    <title>Biuro podróży</title>
</head>
<body>
    <div id="container">
        <div id="main">
            <h1 id="zaloguj">Zaloguj się</h1>
            <form action="login.php" method="post">
                <input type="text" name="login" id="login" placeholder="Login" required>
                <i class="icon-user-circle"></i>
                <br><br>
                <input type="password" name="haslo" id="haslo" placeholder="Hasło" required>
                <i class="icon-lock"></i>
                <br><br>
                <input type="submit" value="Zaloguj się" name="zaloguj">
                <br>
            </form>
            <div id="wynik">
                <?php
                    if(isset($error)){
                        echo $error;
                    }
                ?>
            </div><br><br>
            <a href="reset_password.php" target="_self">Zapomniałeś hasło?</a>
        </div>
    </div>
</body>
</html>

<!-- admin / admin12#
pracownik_gr1 / pracownik123 
uzytkownik / uzytkownik123 -->