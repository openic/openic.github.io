To install:

1. Edit the settings.php file in the wiki folder.
2. Upload the wiki folder to your website
3. Create a table in your MySQL using the file wysiwygwiki.sql
4. Insert the following lines of code between the <head> and </head> tags of the page you want WYSIWYG Wiki to appear on. Make sure the folder path to the settings file is correct.

<?php
include "wiki/settings.php";
include $wikiPath . "/header.php";
?>

5. Insert the following line of code at the location you want WYSIWYG wiki to appear at in the body of your page.

<?php include $wikiPath . "/wiki.php"; ?>

6. Open that page in your web browser, click the line of text that says "Edit this text.", make your first edit, and save the page. You should see a popup message telling you the data has been saved and it should be working now.

If your page has been vandalized, you can go to the wiki/edit.php page, login with the username/password you put into the settings.php file, and you can revert to any previous version.

Note: If you change the URL of the page after saving it, you will lose all previous edits. 