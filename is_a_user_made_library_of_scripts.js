// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// is_a_user_made_library.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4 
// Chars:   ?
// Descr:   @lib is a user-made library of usefull scripts.
//          It is by no mean to be blindly trusted. Allways use
//          scripts.get_level before calling a user script and make
//          sure that you know the dangers of each security level.
//          All source code is available at 
// Syntax:  is_a_user_made_library
// =================================================================

function (context, args)
{
    // we'll wrap the analytics in a try-catch, so that a failure during recording doesn't break the rest of the script
    try
    {
        if (#s.scripts.get_level({name:"soron.arch_data"}) == 4 && #s.scripts.get_level({name:"ada.haxfax"}) == 4) //check SEC LVL
        {
            // Those calls are for logging purposes. Check dtr.man{page:"soron.arch_data"} and dtr.man{page:"ada.haxfax"} in-game for more info.
            #s.soron.arch_data({log:{c:context}});
            #s.ada.haxfax({log:{c:context}});
        }
    }
    catch (e)
    {
        // oh well, we can live with this. Congrats, user-who-is-not-tracked!
    }

    if(#s.scripts.get_level({name:"dtr.man"}) == 4)
        return #s.dtr.man({page:"lib.is_a_user_made_library"});
    else
        return ""
}