<?php
if (isset($_POST['inputName']) && isset($_POST['inputPrenom']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])) {

    if (empty($_POST['inputName']) || empty($_POST['inputPrenom']) || empty($_POST['inputEmail']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Veuillez-entrer tous les champs obligatoires.');
        echo json_encode($data);
        exit;
    }
    $to      = 'simongarnier07@hotmail.fr';
    $subject = 'contact site web';
    $message = $_POST['inputMessage'];			
    $headers = 'From:' . $_POST['inputEmail'] . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


    $retval = mail($to, $subject, $message, $headers);

    if(!retval) {
        $data = array('success' => false, 'message' => 'Problème avec la boite mail. Erreur: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Merci, votre message nous a bien été envoyé.');
    echo json_encode($data);

} else {
    $data = array('success' => false, 'message' => 'Le formulaire n\'a pas été rempli correctement.');
    echo json_encode($data);
}
