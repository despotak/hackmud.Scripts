// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _wrapper.js
// -----------------------------------------------------------------
// author:  @soron, @archangel
// SEC LVL: 4
// Chars:   447
// Descr:   Test the security level of given script and warms the user
//          if it is not FULLSEC. If the script is FULLSEC it is called
//          immediatly, else the user is prompted to override the warning.
// Syntax:  _wrapper {target:#s.user.script , <passthrough:scripts_args> , <override: true>}
// =================================================================

// This is WIP and not working 100% as intended. I'm still trying to
// figure out how the passthrough can work and how you should syntax it.

function (context, args) 
{
	var target = args.target;
	// scripts.get_level returns a number inside scripts, or a string like 'FULLSEC' or 'MIDSEC' on command line
	var sec_level = #s.scripts.get_level({name:target.name});
	
	var l = #s.scripts.lib();
	
	// is it less than FULLSEC? if so, warn the user
	if (sec_level < 4 && !args.override) {
		var sec_level_name = l.security_level_names[sec_level];
		return {
			ok: false,
			msg: "The script you have passed is " + sec_level_name + ". Are you sure you want to continue? If so, pass override:true"
		};
	}
    
	var result = target.call(args.passthrough);
	
	return {
		ok: true,
		msg: "Target called. See 'debug' below to inspect the output.",
		debug: result,
	}
}