<?php
/**
* Template Name: Kierunek
*

*/


$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render( array( 'pages/page-kierunek.twig' ), $context );
