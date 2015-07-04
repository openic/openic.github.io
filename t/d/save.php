<?php

	/**
	 * Feedback v1.0
	 *
	 * Copyright (C) 2014 Erwin Bujak
	 * http://lab.erwinbujak.eu/Feedback/
	 */


	/**
	 * Required files
	 */
	include_once("config.php");
	include_once("phpmailer/phpmailer.php");

	/**
	 * Required function
	 */
	function ent_quotes($row)
	{
		if (is_array($row))
		{
			foreach ($row as $k => $v)
			{
				if (is_array($v))
				{
					$row[$k] = ent_quotes($v);
				}
				else
				{
					$row[$k] = htmlspecialchars($v, ENT_QUOTES);
				}
			}
		}
		else
		{
			$row = htmlspecialchars($row, ENT_QUOTES);
		}

		return $row;
	}

	/**
	 * Ajax Request
	 */
	if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) OR (isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'))
	{
		die('Missing AJAX!');
		exit;
	}

	/**
	 * Capture screenshot
	 */
	$img = false;
	$imgFile = rtrim(dirname(__FILE__), '/').'/cache/'.time().md5(rand(0, 500)).'.png';

	if (isset($_POST['image']) AND !empty($_POST['image']))
	{
		$imageData = $_POST['image'];
		$imageData = str_replace('data:image/png;base64,', '', $imageData);
		$imageData = str_replace(' ', '+', $imageData);

		$img = imagecreatefromstring(base64_decode($imageData));

		if ($img != false) imagepng($img, $imgFile);
		unset($_POST['image']);
	}

	$category = '';

	if (isset($_POST['category']))
	{
		$category = implode(', ', $_POST['category']);
		unset($_POST['category']);
	}

	/**
	 * Send notification to e-mail address
	 */
	$mail = new PHPMailer();

	$mail->SetFrom($mailFromAddress);
	$mail->CharSet = "UTF-8";

	$mail->Subject = $mailSubject;

	$mail->isHTML(true);

	$mail->Body = '<table>';
	$mail->Body .= '	<tbody>';

	if ($category != '')
	{
		$mail->Body .= '		<tr>';
		$mail->Body .= '			<td>Category:</td>';
		$mail->Body .= '			<td>'.$category.'</td>';
		$mail->Body .= '		</tr>';
	}

	if (count($_POST))
	{
		foreach ($_POST as $key => $val)
		{
			$mail->Body .= '		<tr>';
			$mail->Body .= '			<td>'.ent_quotes($key).':</td>';
			$mail->Body .= '			<td>'.str_replace("\n", "<br />", ent_quotes($val)).'</td>';
			$mail->Body .= '		</tr>';
		}
	}

	$mail->Body .= '	</tbody>';
	$mail->Body .= '<table>';

	$mail->AddAddress($mailToAddress);

	if ($img != false)
	{
		$mail->AddAttachment($imgFile, 'screenshot.png');
	}

	if ($mail->send())
	{
		echo 'Success';
	}
	else
	{
		echo 'Error';
	}

	if ($img != false) unlink($imgFile);
	unset($mail);

?>