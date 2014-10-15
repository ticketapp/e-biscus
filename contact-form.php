<?php
if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Veuillez-entrer tous les champs obligatoires.');
        echo json_encode($data);
        exit;
    }
/*
    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('simongarnier07@hotmail.fr'); //recipient
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = "Name: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }
*/
    $data = array('success' => true, 'message' => 'Merci, votre message nous a bien été envoyé.');
    echo json_encode($data);

} else {
    echo("<h1>kljlkjkljkljjkllkjljlkjlkj</h1>");
    $data = array('success' => false, 'message' => 'Le formulaire n'a pas été rempli correctement.');
    echo json_encode($data);

}