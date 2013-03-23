<?php
	session_start();
	class ftp { 
		public $conn; 

		public function __construct($url) { 
			$this->conn = ftp_connect($url); 
		} 
		
		public function __call($func,$a) { 
			if (strstr($func,'ftp_') !== false && function_exists($func)) { 
				array_unshift($a,$this->conn); 
				return call_user_func_array($func,$a); 
			} else {
				die("$func is not a valid FTP function"); 
			} 
		} 
	} 

	// Example 
	//$ftp = new ftp('ftp.example.com'); 
	//$ftp->ftp_login('username','password'); 
	//var_dump($ftp->ftp_nlist());
?>