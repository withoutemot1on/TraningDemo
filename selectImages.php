<?php 
include "config.php";

$photoAfter = $_GET["foto-after"];
$query = "SELECT `foto-after` from orders";
$run_sql = mysqli_query($link, $query);

$output=[];
if(mysqli_num_rows($run_sql) > 0){
    while($row=mysqli_fetch_assoc($run_sql)){
        $output[]=$row;
    }
}else{
    $output["empty"]="empty";
}

echo json_encode($output);

?>