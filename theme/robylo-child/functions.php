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

/**
 * Mark the existing About links in the Atomic header and mobile popup.
 *
 * Atomic button links do not inherit WordPress menu-item state.
 *
 * @param string $content Rendered Elementor HTML.
 * @return string
 */
function robylo_mark_current_about_link( $content ) {
	if ( ! is_page( 'about' ) || ! class_exists( 'WP_HTML_Tag_Processor' ) || false === strpos( $content, '/about/' ) ) {
		return $content;
	}

	$html = new WP_HTML_Tag_Processor( $content );
	while ( $html->next_tag( array( 'tag_name' => 'A' ) ) ) {
		if ( '/about/' !== $html->get_attribute( 'href' ) ) {
			continue;
		}

		$element_id = $html->get_attribute( 'data-interaction-id' );
		if ( in_array( $element_id, array( '5d11a8d2', '3cba38b3' ), true ) ) {
			$html->set_attribute( 'aria-current', 'page' );
		}
	}

	return $html->get_updated_html();
}
add_filter( 'elementor/frontend/the_content', 'robylo_mark_current_about_link' );
