;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function hereDocProcess(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				result = []
				;
			if (match.here_doc != null)
				result.push(new constructor(match.here_doc, match.index + match[0].indexOf(match.here_doc), 'string'));

			if (match.full_tag != null)
				result.push(new constructor(match.full_tag, match.index, 'preprocessor'));

			if (match.end_tag != null)
				result.push(new constructor(match.end_tag, match.index + match[0].lastIndexOf(match.end_tag), 'preprocessor'));
			return result;
		}
		var directives ='ALRF CCKD PANTITLE DEFSYM ARCHMODE CNSLPORT CONKPALV CPUMODEL CPUSERIAL DIAG8CMD ECPSVM LOADPARM LPARNAME MAINSIZE MOUNTED_TAPE_REINIT NUMCPU OSTAILOR PANRATE PGMPRDOS SHCMDOPT SYSEPOCH TIMERINT TZOFFSET YROFFSET HERCPRIO TODPRIO DEVPRIO CPUPRIO ANTITLE';
		var keywords =	'DDDD';
		var commands =  'XXX hjhj';
		var constants =	'ENABLE DISABLE YES NO DISALLOW ALLOW LICENSED 3270 3390 z/Arch Z/OS';

		this.regexList = [
			{ regex: /^#!.*$/gm,						css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,					css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			//{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' },		// keywords
			//{ regex: new RegExp(this.getKeywords(commands), 'gm'),	css: 'functions' },		// commands
			{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants' },		// constants
			//{ regex: new RegExp(this.getKeywords(directives), 'gm'),	css: 'variable' },		// directives
        //{ regex: /,[\w \t]*(=)/gm,       css: 'keyword' } ,     // keywords
			
			{ regex: /((^[0-9A-Fa-f]{4})|(^[0-9]{4}))/gm,			css: 'variable' },
			//{ regex: /(([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)|([ 0-9]+))/gm,	css: 'value' },			// Numbers
			//{ regex: /([0-9A-Fa-f]{4})/gm,				css: 'value' },
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['hercules'];

	SyntaxHighlighter.brushes.Hercules = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();