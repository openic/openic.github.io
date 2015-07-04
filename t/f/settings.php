<?php

// ------------ Database Settings ------------ 
$host = "localhost";
$dbUsername = "username";
$dbPassword = "password";
$dbTable = "database_table";

// ------------ Path to the wiki folder (no trailing slash) ------------ 
$wikiPath = "wiki";

// ------------ Username variable -------------
// If you know your username variable, put it below and uncomment the line below (remove the //)
// $username = $_SESSION['username'];
//
// For Drupal sites, uncomment the following two lines (remove the //)
//  	global $user
//  	$username = $user;
//
// For Wordpress sites, uncomment the following two lines (remove the //)
//  	global $user_identity
//  	$username = $user_identity;
// 
// For Joomla sites, uncomment the following three lines (remove the //)
// 		global $mainframe;
// 		$user = $mainframe->getUser();
// 		$username = $user->get('username');
//
// ------------ Allow anonymous edits (yes), or only registered users (no). Username variable above must be set for registered users. ------------ 
$allowAnonymousEdits = "yes";

// Admin username and password. This is used to login to the edit.php page
$adminUsername = "admin";
$adminPassword = "password";

?>