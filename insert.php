<?php
$con = mysqli_connect("localhost","root","","student");
$uname = $_POST["uname"];
$upass = $_POST["upass"];
$uid = $_POST["uid"];
$uroll = $_POST["uroll"];
$sql = "SELECT * FROM 'STUDENTINFO' WHERE STUDNETINFO.NAME='$uname' and STUDENTINFO.PASSWORD='$upass' and STUDENTINFO.SAP='$uid' and STUDENTINFO.ROLLNO = '$uroll'";
$result = mysqli_query($con,$sql);
if($result){
    echo "Your name is : $uname";
    echo"Roll no : $uroll";
}
else{
    echo "error occured";
}