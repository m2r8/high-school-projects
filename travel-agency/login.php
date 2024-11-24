<?php
    session_start();
    require_once "connect.php";
    $polaczenie = @new mysqli($host, $db_user,$db_password,$db_name);
    if($polaczenie->connect_errno!=0)
    {
        echo "Error: ".$polaczenie->connect_errno ."Opis: ".$polaczenie->connect_error; 
    }else{
        $login = $_POST['login'];
        $haslo = $_POST['haslo'];
        $sql = "SELECT * FROM users WHERE login='$login' AND password='$haslo'";
        if($rezultat = @$polaczenie->query($sql)) 
        {   
            $hasloZBazyDanych = '';
            $sql4= "SELECT `password` FROM users WHERE login='$login';";
            $result4 = mysqli_query($polaczenie,$sql4);
            while($myResult4 = mysqli_fetch_row($result4)){
                $hasloZBazyDanych = $myResult4[0];
            }
            if(password_verify($haslo,$hasloZBazyDanych)) {  
                $ilu_userow = $rezultat->num_rows;
                $wiersz = $rezultat->fetch_assoc();
                $user = $wiersz['login'];
                $_SESSION['logged_user'] = $login;
                
                $rezultat->free_result();
            
                $sql5= "SELECT isAdmin FROM `users` WHERE login='$uzytkownik'";
                $result5 = mysqli_query($polaczenie, $sql5);

                while($show_result5 = mysqli_fetch_row($result5)){
                    $AdminCheck = $show_result5[0];
                }
                header('Location: dashboard.php');
        } else {
            $_SESSION['login_error'] = "Nie poprawny login lub haslo";
            header('Location: index.php');
        }
    }
    $polaczenie->close();
}
?>