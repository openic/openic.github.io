<?

include "settings.php";

if(isset($_POST['data']))
{
	$url = $_POST['url'];
	$timestamp = time();
	if(!isset($_POST['username'])){ $username = "Anonymous"; }
	else { $username = $_POST['username']; }

	mysql_connect($host,$dbUsername,$dbPassword) or die(mysql_error());
	mysql_select_db($dbTable) or die(mysql_error());
	$data = mysql_real_escape_string($_POST['data']);
	mysql_query("INSERT INTO wysiwygwiki(timestamp,url,username,data) VALUES('$timestamp','$url','$username','$data')") or die(mysql_error());
	
} else {
	echo "This page is for internal use only. Users cannot access this page directly.";
}
?>