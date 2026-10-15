<?php
/**
 * Minimal WordPress integration for ROBYLO Child.
 *
 * @package RobyloChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the child stylesheet after Hello Elementor's own enqueue callback.
 *
 * @return void
 */
function robylo_enqueue_styles() {
	$dependencies = wp_style_is( 'hello-elementor-theme-style', 'enqueued' )
		? array( 'hello-elementor-theme-style' )
		: array();

	wp_enqueue_style(
		'robylo-child-style',
		get_stylesheet_uri(),
		$dependencies,
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'robylo_enqueue_styles', 20 );
