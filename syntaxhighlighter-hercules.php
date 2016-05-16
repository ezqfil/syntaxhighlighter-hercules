<?php
	/*  
	Copyright 2016 ezqfil  (email : ezqfil@ezqfil.com.ar)

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as 
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
	*/
	/*
	Plugin Name: SyntaxHighlighter Evolved: Hercules
	Plugin URI: http://www.ezqfil.com.ar/hercules-brush-syntaxhighlighter-evolved-wordpress-plugin/
	Description: Adds support for Hercules .cnf files to the SyntaxHighlighter Evolved plugin. Based on the <a href="http://www.tech-otaku.com/blogging/apache-brush-syntaxhighlighter-evolved-wordpress-plugin/">ApacheConfig brush</a> by Steve Ward.
	Author: EzqFil
	Version: 1.0.0
	Author URI: http://www.ezqfil.com.ar/
	License: GPLv2
	based on the ApacheConfig brush by Steve Ward published at http://www.tech-otaku.com/blogging/apache-brush-syntaxhighlighter-evolved-wordpress-plugin/
	*/
	
	// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
	add_action( 'init', 'syntaxhighlighter_hercules_regscript' );

	// Tell SyntaxHighlighter Evolved about this new language/brush
	add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_hercules_addlang' );

	// Register the brush file with WordPress
	function syntaxhighlighter_hercules_regscript() {
		wp_register_script( 'syntaxhighlighter-brush-hercules', plugins_url('syntaxhighlighter-hercules/scripts/shBrushHercules.js'), array('syntaxhighlighter-core'), '1.0.0');
	}

	// Filter SyntaxHighlighter Evolved's language array
	function syntaxhighlighter_hercules_addlang( $brushes ) {
		$brushes['hercules'] = 'hercules';
		return $brushes;
	}
?>