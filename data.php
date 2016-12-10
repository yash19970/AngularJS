<?php 
include('dbclass.php');
class Data{ 
	public function getData(){
		
		$conn = DB::connect();
		$q3 = "SELECT * FROM angular";
		$run = mysqli_query($conn,$q3);
		if(mysqli_num_rows($run)>0){
				while($row = mysqli_fetch_assoc($run)){
				$data[] =  $row;
			}	
		}else{
			echo "0 results";
		}
		//$result = json_encode($data);
		$this->response($data);
	}	
}
?>