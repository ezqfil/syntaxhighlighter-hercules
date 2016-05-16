=== SyntaxHighlighter Evolved Hercules ===
Donate link: http://www.viper007bond.com/wordpress-plugins/syntaxhighlighter/donate/
Tags: syntax, hightligher, apache, code, CSS, html, php, sourcecode
Requires at least: 3.2.1
Tested up to: 4.5.2
Stable tag: 1.0.0

Adds support for Hercules *.cnf files to the SyntaxHighlighter Evolved plugin using [hercules]

== Description ==
<b>SyntaxHighlighter Evolved into</b> adds support to the [SyntaxHighlighter Evolved](http://wordpress.org/extend/plugins/syntaxhighlighter/) plugin for Hercules *.cnf files based on the ApacheConfig brush provided by [Steve Ward](http://www.tech-otaku.com/blogging/apache-brush-syntaxhighlighter-evolved-wordpress-plugin/). 

== Installation ==

###Prerequisite###

In order to use SyntaxHighlighter Evolved Apache, you must first install [SyntaxHighlighter Evolved](http://wordpress.org/extend/plugins/syntaxhighlighter/).

###Installation###

Extract all files from the ZIP file, making sure to keep the file/folder structure intact, and then upload it to /wp-content/plugins/.

###Plugin Activation###

Go to the admin area of your WordPress install and click on the "Plugins" menu. Click on "Activate" for the "SyntaxHighlighter Evolved: Hercules" plugin.

###Plugin Usage###

Just wrap your code in [hercules], such as [hercules]code here[/hercules] . You may also use <pre class="brush: hercules">code here</pre>.

The shortcodes accept a wide variety of parameters. For details, see the bottom of the SyntaxHighlighter Evolved's settings page.

== Frequently Asked Questions ==

= The code is just being displayed raw. It isn't being converted into a code box or anything. What's wrong?  =

Make sure your theme's `footer.php` file has `<?php wp_footer(); ?>` somewhere inside of it, otherwise the plugin won't be able to do it's thing.

== Screenshots ==


== Changelog ==

= 1.0.0 =
* Initial release