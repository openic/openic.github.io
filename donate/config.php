<?php

// Fill your PayPal email below.
// This is where you will receive the donations.

$myPayPalEmail = 'your@email.com';


// The paypal URL:
$payPalURL = 'https://www.paypal.com/cgi-bin/webscr';


// Your goal in USD:
$goal = 100;


// Demo mode is set - set it to false to enable donations.
// When enabled PayPal is bypassed.

$demoMode = true;

if($demoMode)
{
	$payPalURL = 'demo_mode.php';
}
?>