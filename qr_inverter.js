// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// qr_inverter.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4
// Chars:   834
// Descr:   Inverts the order QR codes of T2 NPCs.
// Syntax:  qr_inverter{t:#s.NPC.loc, u:"username", c:"command"}
// Syntax:  qr_inverter{qr:"QR_code_as_String"}
// =================================================================

function (context, args)
{
    // t:#s.NPC.loc, u:"username", c:"command"

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

    if((!args.t || !args.u || !args.c) && !args.qr && #s.scripts.get_level({name:"dtr.man"}) == 4)
        return #s.dtr.man({page:"lib.qr_inverter"});

    var qrs = (args.qr) ? args.qr : args.t.call({username:args.u, [args.c]:"order_qrs"});

    var inv = "";

    for (var i=0; i<qrs.length; i++)
    {
        if(qrs[i][0] != '█' && qrs[i][0] != '▄' && qrs[i][0] != '▀' && qrs[i][0] != ' ')
            continue;

        var s = qrs[i].split("\n");

        for (var y=0; y<s[0].length+1; y++)
            inv += "█";

        inv += "█\n█";

        for (var j=0; j<qrs[i].length; j++)
        {
            switch(qrs[i][j])
            {
                case '█':                  //fullblock     ->  "█"
                    inv += " ";
                    break;
                case ' ':                  //white space   ->  " "
                    inv += "█";
                    break;
                case '▄':                  //lower half    ->  "▄"
                    inv += "▀";
                    break;
                case '▀':                  //upper half    ->  "▀"
                    inv += "▄";
                    break;
                case '\n':                 //new line      ->  "\n"
                    inv += "█\n█";
                    break;
                default:
                    inv += qrs[i][j];
            }
        }

        inv = inv.slice(0, -1) +"\n\n";
    }
    
    return inv;
}