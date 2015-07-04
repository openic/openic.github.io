<?php

	/**
	 * Feedback v1.0
	 *
	 * Copyright (C) 2014 Erwin Bujak
	 * http://lab.erwinbujak.eu/Feedback/
	 */

	/**
	 * Reporting error
	 * Value: E_ALL, E_ERROR, E_WARNING, E_PARSE, E_NOTICE
	 */
	ini_set('error_reporting', E_ALL);

	/**
	 * Write your subject in email.
	 * String
	 */
	$mailSubject = 'Feedback from: efabless';

	/**
	 * Write e-mail address from which the notification will be sent.
	 * String
	 */
	$mailFromAddress = 'connect@efabless.com';

	/**
	 * Write your e-mail address to which the notification will come.
	 * String
	 */
	$mailToAddress = 'admin@efabless.com';

?>