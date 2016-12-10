<?php  
class DB{
	public static function connect(){
		$conn = mysqli_connect("localhost","root","yash","ci_test");	
		return $conn;
	}
}
$dbb = new DB;
$dbb->connect();
?>