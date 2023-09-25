<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"]
    $message = $_POST["message"];

    
    $to = "sakargautam1110@gmail.com"; 

    
    $subject = "Contact Us Form Submission from $name";

    
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

   
    $headers = "From: $email";


    if (mail($to, $subject, $email_message, $headers)) {
        
        $response = array("success" => true);
        echo json_encode($response);
    } else {
   
        $response = array("success" => false);
        echo json_encode($response);
    }
} else {
  
    http_response_code(400);
    echo "Invalid request.";
}
?>
