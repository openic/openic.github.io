<?php

/* Database config */

$db_host		= 'ssldbdonate.db.9526500.hostedresource.com:3306';
$db_user		= 'ssldbdonate';
$db_pass		= 'Besmellah1!';
$db_database		= 'ssldbdonate';

/* End config */


$link = @mysql_connect($db_host,$db_user,$db_pass) or die('Unable to establish a DB connection');

mysql_set_charset('utf8');
mysql_select_db($db_database,$link);

?>