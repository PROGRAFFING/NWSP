<?php
/**
* Template Name: Kierunki
*

*/


$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render( array( 'pages/page-kierunki.twig' ), $context );
