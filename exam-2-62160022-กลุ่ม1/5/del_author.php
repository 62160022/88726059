<?php
   // config for connect database 
$connect = mysqli_connect("localhost", "root", "", "author"); 

 if (isset($_POST['id'])) {
      $id = $_POST['id'];
}else{
   $id = '';
}
   $query =  "DELETE FROM `author` WHERE `authorID` = $id";
   $result = mysqli_query($connect, $query);


echo "connect success";
?>    