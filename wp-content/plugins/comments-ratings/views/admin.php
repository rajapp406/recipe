<?php
/**
 * Represents the view for the administration dashboard.
 *
 * This includes the header, options, and other information that should
 * provide the user interface to the end user.
 *
 * @package   customify
 * @author    Pixelgrade <contact@pixelgrade.com>
 * @license   GPL-2.0+
 * @link      http://pixelgrade.com
 * @copyright 2013 Pixel Grade Media
 */

$config = include pixreviews::pluginpath() . 'plugin-config' . EXT;

// invoke processor
$processor = pixreviews::processor( $config );
$status    = $processor->status();
$errors    = $processor->errors(); ?>

<div class="wrap" id="pixreviews_form">

	<div id="icon-options-general" class="icon32"><br></div>

	<h2><?php _e( 'Comments Ratings', 'comments-ratings' ); ?></h2>

	<?php if ( $processor->ok() ): ?>

		<?php if ( ! empty( $errors ) ): ?>
			<br/>
			<p class="update-nag">
				<strong><?php _e( 'Unable to save settings.', 'comments-ratings' ); ?></strong>
				<?php _e( 'Please check the fields for errors and typos.', 'comments-ratings' ); ?>
			</p>
		<?php endif;

		if ( $processor->performed_update() ): ?>
			<br/>
			<p class="update-nag">
				<?php _e( 'Settings have been updated.', 'comments-ratings' ); ?>
			</p>
		<?php endif;
		echo $f = pixreviews::form( $config, $processor );
		echo $f->field( 'hiddens' )->render();
		echo $f->field( 'labels' )->render();
		echo $f->field( 'general' )->render(); ?>

		<?php wp_nonce_field( 'comments-ratings-save-settings' ); ?>

		<button type="submit" class="button button-primary">
			<?php _e( 'Save Changes', 'comments-ratings' ); ?>
		</button>

		<?php echo $f->endform();

	elseif ( $status['state'] == 'error' ): ?>

		<h3>Critical Error</h3>

		<p><?php echo $status['message'] ?></p>

	<?php endif; ?>
</div>
