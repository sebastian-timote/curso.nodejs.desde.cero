<?php
print('abriendo archivo...<br>');
$fichero_url = fopen('archivo.txt', 'r');
$texto = '';
while ($trozo = fgets($fichero_url)){
    $texto .= $trozo;
}
print($texto);
print('<br>haciendo otra cosa');


?>