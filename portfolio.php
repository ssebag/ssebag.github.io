<?php
if(isset($_POST['btn-send']))
{
   $name=$_POST['name'];
   $email=$_POST['email'];
   $message=$_POST['message'];
   $subject=$_POST['subject'];
   $to="s.sseba96@gmail.com";
   mail($to , $subject , $message , $email);
   header("Location: index.php");
}

?>