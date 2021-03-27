<?php
   // config for connect database 
   $connect = mysqli_connect("localhost", "root", "", "author"); 

function fill_music($connect){
    if (isset($_GET['demo'])) {
        $nn = $_GET['demo'];
    } else {
        $sql = "SELECT * FROM `author`";


    $result = mysqli_query($connect, $sql);

    $arr = array();

    while($row = $result->fetch_object())
    {
         $arr[] = $row;
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }
    
}
    echo fill_music($connect);
?>    




