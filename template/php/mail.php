<?php
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $member = trim($_POST["member"]);
        $datepicker = trim($_POST["datepicker"]);
        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($member) OR empty($datepicker)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }
        // Set the recipient email address.
        $recipient = "mdistekarislam@gmail.com";
        // Set the email subject.
        $subject = "New contact from $name";
        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "No Of Member: $member\n";
        $email_content .= "Date: $datepicker\n\n";
        // Build the email headers.
        $email_headers = "From: $name";
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200  response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>