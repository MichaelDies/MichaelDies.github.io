<?php

$Owner = $_POST['Owner'];

$Model = $_POST['Model'];
$Manufacturer = $_POST['Manufacturer'];
$RatedSpeed = $_POST['RatedSpeed'];
$MeasuredSpeed = $_POST['MeasuredSpeed'];

    // Database connection
    $conn = new mysqli('localhost','root','','bullets');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into bullet(Owner, Model, Manufacturer, RatedSpeed, MeasuredSpeed) values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssdd", $Owner, $Model, $Manufacturer , $RatedSpeed, $MeasuredSpeed);
        $execval = $stmt->execute();
        echo $execval;
        echo "Table have been added ...";
        $stmt->close();
        $conn->close();
        
    }
?>
