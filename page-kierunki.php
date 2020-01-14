<?php
/**
* Template Name: Kierunki
*

*/


$context = Timber::context();




$timber_post     = new Timber\Post();


Timber::render( array( 'pages/page-kierunki.twig', 'page.twig' ), $context );
