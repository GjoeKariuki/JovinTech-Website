<?php

    if(!isset($_POST['submit'])){
        echo "error; you need to submit the form!";
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        // if(empty($name)||empty($email)){
        //     echo "name and email required";
        //     exit;
        // }
        $to = "jovintechtechnology@gmail.com"
        $subject = "Message from $name";
        $body = "you have received a new message from the user $name.\n".
        "email address: $email\n".
        "Here is the message:\n $message".

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        mail($to, $subject,$body,$headers);
        // header("Location: Thank_you.html")
        exit;
    }

?>