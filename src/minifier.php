<?php

require  '../vendor/autoload.php';

use MatthiasMullie\Minify;

$isMinifier = filter_input(INPUT_GET, "minify", FILTER_VALIDATE_BOOL);


if ($_SERVER["SERVER_NAME"] == "localhost" || $isMinifier) {

    $dir = new RecursiveDirectoryIterator(dirname(__DIR__, 1) . "/assets");
    echo "<ol>";
    foreach (new RecursiveIteratorIterator($dir) as $dirItem) {
        if ($dirItem->isFile() && $dirItem->getExtension() == "css") {
            echo "<li>" . $dirItem . "</li>";
            $cssMinifier = new Minify\CSS();
            $cssMinifier->add($dirItem->getRealPath());
            $compiledCssDir = dirname(__DIR__, 1) . "/public/style.min.css";
            $cssMinifier->minify($compiledCssDir);
        }

        if ($dirItem->isFile() && $dirItem->getExtension() == "js") {
            echo "<li>" . $dirItem . "</li>";
            $jsMinifier = new Minify\JS();
            $jsMinifier->add($dirItem->getRealPath());
            $compiledJsDir = dirname(__DIR__, 1) . "/public/script.min.js";
            $jsMinifier->minify($compiledJsDir);
        }
    }
    echo "</ol>";
}
