<?php
$config = array();

$config['plugin_screen'] = 'appearance_page_simple-author-box';
$config['icon_border'] = '1px solid #00000099';
$config['icon_right'] = '35px';
$config['icon_bottom'] = '45px';
$config['icon_image'] = 'sab.png';
$config['icon_padding'] = '4px';
$config['icon_size'] = '55px';
$config['menu_accent_color'] = '#dd3036';
$config['custom_css'] = '#wf-flyout .ucp-icon .wff-icon img { max-width: 70%; } #wf-flyout .ucp-icon .wff-icon { line-height: 57px; } #wf-flyout .wp301-icon .wff-icon img { max-width: 70%; } #wf-flyout .wp301-icon .wff-icon { line-height: 57px; } #wf-flyout .wff-custom-icon.wff-menu-item-6 span.wff-icon { line-height: 63px; }';

$config['menu_items'] = array(
  array('href' => 'https://wpauthorbox.com/?ref=wff-sab', 'label' => 'Get Simple Author Box PRO for only $39', 'icon' => 'sab.png', 'class' => ''),
  array('href' => 'https://wpforcessl.com/?ref=wff-sab', 'label' => 'Fix all SSL problems &amp; monitor site in real-time', 'icon' => 'wp-ssl.png', 'class' => 'wpfssl-icon'),
  array('href' => 'https://wp301redirects.com/?ref=wff-sab&coupon=50off', 'label' => 'Get WP 301 Redirects PRO with 50% off', 'icon' => '301-logo.png', 'class' => 'wp301-icon'),
  array('href' => 'https://wpreset.com/?ref=wff-sab', 'target' => '_blank', 'label' => 'Get WP Reset PRO with 50% off', 'icon' => 'wp-reset.png'),
  array('href' => 'https://underconstructionpage.com/?ref=wff-sab&coupon=welcome', 'target' => '_blank', 'label' => 'Create the perfect Under Construction Page', 'icon' => 'ucp.png', 'class' => 'ucp-icon'),
  array('href' => 'https://wpsticky.com/?ref=wff-sab', 'target' => '_blank', 'label' => 'Make any element sticky with WP Sticky', 'icon' => 'dashicons-admin-post'),
  array('href' => 'https://wordpress.org/support/plugin/simple-author-box/reviews/#new-post', 'target' => '_blank', 'label' => 'Rate the Plugin', 'icon' => 'dashicons-thumbs-up'),
  array('href' => 'https://wordpress.org/support/plugin/simple-author-box/#new-post', 'target' => '_blank', 'label' => 'Get Support', 'icon' => 'dashicons-sos'),
);
