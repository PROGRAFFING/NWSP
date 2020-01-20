<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Template Name: Subpage hero
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */



 
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['favourite'] =Timber::get_posts(array('post_type' => 'post', "posts_per_page" => 2));


Timber::render( array( 'pages/page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );
