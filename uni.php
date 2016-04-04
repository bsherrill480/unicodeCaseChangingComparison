<?php

function _unichr($o) {
	if (function_exists('mb_convert_encoding')) {
		return mb_convert_encoding('&#'.intval($o).';', 'UTF-8', 'HTML-ENTITIES');
	} else {
		return chr(intval($o));
	}
}

$maxNumber = 65536;
$unicodeString = "";
$percent = 0;
for($i = 0; $i < $maxNumber; $i++) {
	$unicodeChar =  mb_strtolower(_unichr($i), 'UTF-8');
	if($i === 0) {
		$unicodeString .= $unicodeChar;
	} else {
		$unicodeString .= " " . $unicodeChar;
	}
}
$myfile = fopen('phpUniString', "w") or die("Unable to open file!");
fwrite($myfile, $unicodeString);
fclose($myfile);
?>
