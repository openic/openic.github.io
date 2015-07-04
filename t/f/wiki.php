<?php
	$url = $_SERVER['PHP_SELF'];
        
        // Connect to database
        mysql_connect($host,$dbUsername,$dbPassword) or die(mysql_error());
        mysql_select_db($dbTable) or die(mysql_error());

	
	// Grab all the data for this URL
	$query = mysql_query("SELECT * FROM wysiwygwiki WHERE url='$url' ORDER BY timestamp DESC LIMIT 1") or die(mysql_error());
	$row = mysql_fetch_array($query);

	if(isset($row['data']))
        {
                $data = $row['data'];
	} else 
        {
                $data = "Edit this text.";
	}        
        
        
        
        // Check if anonymous edits are allowed or if the user is logged in
        if($allowAnonymousEdits == "yes" || $username != NULL) {
            echo '<img src="' . $wikiPath . '/img/edit.png" id="wiki-edit-image" onmouseover="showImage(' . "'caption'" . ')"><img src="' . $wikiPath . '/img/caption.jpg" id="caption">'; 
            echo '<a href="javascript:saveWiki()"><img src="' . $wikiPath . '/img/save.png" id="save-wiki"></a>';                
            echo '<div id="wiki-edit" onmousedown="showImage(' . "'save-wiki'" . ')">' . $data . '</div>';	
        }
        else 
        {	
            echo '<img src="' . $wikiPath . '/img/edit.png" id="wiki-edit-image" onmouseover="showImage(' . "'caption'" . ')"><img src="' . $wikiPath . '/img/caption2.jpg" id="caption">';
            echo '<div>' . $row['data'] . '</div>';	
        }

?>