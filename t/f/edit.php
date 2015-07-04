<? 

include "settings.php";
session_start(); 

// Connect to database
mysql_connect($host,$dbUsername,$dbPassword) or die(mysql_error());
mysql_select_db($dbTable) or die(mysql_error());

// Print login form if the user is not logged in
if($_POST['username'] != $adminUsername && $_POST['password'] != $adminPassword && $_SESSION['loggedin'] != TRUE){
	if (isset($_POST['username'])){ echo "Incorrect username or password<br />"; }
	echo '<form action="edit.php" method="post">
	Username: <input type="text" name="username" /><br />
	Password: <input type="password" name="password" /><br />
	<input type="submit" />
	</form>';
}
// Revert to older revisions upon request
elseif(isset($_GET['revert'])){
	$timestamp = $_GET['revert'];
	$url = $_GET['url'];
	$query = mysql_query("SELECT * FROM wysiwygwiki WHERE url='$url' AND timestamp='$timestamp'") or die(mysql_error());
	$row = mysql_fetch_array($query);
        $newTimestamp = time();
        $data = $row['data'];
        $username = $_SESSION['username'];
        mysql_query("INSERT INTO wysiwygwiki(timestamp,url,username,data) VALUES('$newTimestamp','$url','$username','$data')");
        header("Location: edit.php?url=" . $url);
}
// Print the edits for a specified page (if given)
elseif(isset($_GET['url'])) {
		
		session_start(); 
    	$_SESSION['loggedin'] = TRUE; 
	
		$url = $_GET['url'];
		
		// Print the content of the specific edit requested
		if(isset($_GET['timestamp'])){
			$timestamp = $_GET['timestamp'];
			$query = mysql_query("SELECT * FROM wysiwygwiki WHERE timestamp='$timestamp' LIMIT 1");
			$row = mysql_fetch_array($query);
			$data = $row['data'];
			echo $data . "<br /><hr><br />";
		}
		
		// Print all the edits to the specified page
		$query = mysql_query("SELECT * FROM wysiwygwiki WHERE url='$url' ORDER BY timestamp DESC") or die(mysql_error());
		echo '<table cellpadding="5px"><tr><td><h3>Timestamp</h3>Click link to view revision</td><td><h3>Username</h3></td></tr>';
		while($row = mysql_fetch_array($query)){
			echo '<tr><td><a href="edit.php?url=' . $url . '&timestamp=' . $row['timestamp'] . '">' . date("m-d-Y H:i:s", $row['timestamp']) . '</td><td>' . $row['username'] . '</td><td><a href="edit.php?revert=' . $row['timestamp'] . '&url=' . $url . '">Revert to this version.</a></tr>';
		}
		echo '</table>';
}
// If no page has been specified, print all available pages
else{
	session_start(); 
    $_SESSION['loggedin'] = TRUE;
    $_SESSION['username'] = $_POST['username'];

    // Find all unique wiki-page URLs
    $query = mysql_query("SELECT * FROM wysiwygwiki ORDER BY url") or die(mysql_error());
    $i=0;
    while($row = mysql_fetch_array($query))
    {
            $urlArray[$i] = $row['url'];
            if($urlArray[$i] != $urlArray[$i-1])
            {
                    $i++;
            }
            else { $urlArray[$i] = NULL; }
    }
    // Print all available URLs
    echo "<h2>Select a URL:</h2>";
    if (count($urlArray) == 1) { echo "No URLs available."; }
    else{
            foreach($urlArray as $u){ echo '<a href="edit.php?url=' . $u . '">' . $u . '</a><br />'; }
    }
}
	
?>