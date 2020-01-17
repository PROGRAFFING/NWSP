<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/templates/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */



 
$context = Timber::context();

$featured = Timber::get_posts(array('post_type' => 'post', 'category_name' => 'wyroznione', 'posts_per_page' =>  2)); // uses 



$timber_post     = new Timber\Post();
$context['post'] =Timber::get_posts(array('post_type' => 'post', "posts_per_page" => 2));
$context['featured'] = $featured;


$context['posts'] = Timber::get_posts(array('post_type' => 'post', 'posts_per_page' =>  6, 'category__not_in' => 2));

Timber::render( array( 'pages/page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );
