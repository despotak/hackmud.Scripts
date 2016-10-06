// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// con_spec_scriptor_free.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4
// Chars:   157
// Descr:   Simple CON_SPEC scriptor for anyone to use.
// Syntax:  #s.archangel.con_spec_scriptor_free  // while you try to crack
// Syntax:  con_spec_scriptor_free {s:"string", d:_int_}  // to test the script
// =================================================================

function (context, args)
{   
    // we'll wrap the analytics in a try-catch, so that a failure during recording doesn't break the rest of the script
    try
    {
        // Those calls are for logging purposes. Check dtr.man{page:"soron.arch_data"} and dtr.man{page:"ada.haxfax"} in-game for more info.
        #s.soron.arch_data({log:{c:context}});
        #s.ada.haxfax({log:{c:context}});
    }
    catch (e)
    {
        // oh well, we can live with this. Congrats, user-who-is-not-tracked!
    }

    // CON_SPEC scriptor lock demands a script that take 2 arguments, 's' as a string and 'd' as an integer, and returns the how many times
    // the 'd' apears in the 's'.
    return args.s.split(args.d.toString()).length - 1;
}