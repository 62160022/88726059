<?php
    $authors = [];
    if (isset($_GET['show'])) {
        $authors = $_GET['show'];
    }else {
        $authors = [
        ['authorID'=> 1111, 
        'author'=> 'wittawas',
        'penname'=> 'witty100'],
        ['authorID'=> 1112, 
        'author'=> 'jakkarin',
        'penname'=> 'พ่อบ้านใจกล้า'],
        ['authorID'=> 1113, 
        'author'=> 'worawit',
        'penname'=> 'witobobty100']
    ];
    }
    $arr =  json_encode($authors,JSON_UNESCAPED_UNICODE);
    echo ($arr);
?>
