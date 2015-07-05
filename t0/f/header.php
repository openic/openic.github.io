<link rel="stylesheet" type="text/css" href="<?php echo $wikiPath; ?>/css/aloha.css" />
<script src="<?php echo $wikiPath; ?>/lib/aloha.js" data-aloha-plugins="common/format,common/list,common/link,common/table"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">
Aloha.ready( function() {     
// Make #content editable once Aloha is loaded and ready.
Aloha.jQuery('#wiki-edit').aloha();
});
        function saveWiki()
        {	
            var content = Aloha.getEditableById('wiki-edit').getContents();
            var url = "<? echo $_SERVER['PHP_SELF']; ?>";
            $.post("<?php echo $wikiPath; ?>/save.php", { data: content, url: url },
            function() {
              alert("Data Saved");
        });
        }
        function showImage(id) { 
        if (document.layers) document.layers[''+id+''].visibility = "show" 
        else if (document.all) document.all[''+id+''].style.visibility = "visible" 
        else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "visible" 
        } 
 </script>