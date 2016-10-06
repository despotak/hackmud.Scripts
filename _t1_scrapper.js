// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _t1_scrapper.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: ?
// Chars:   ??
// Descr:   ???
// Syntax:  _t1_scrapper
// =================================================================

function (context, args)
{
    //var lib = #s.scripts.lib();
    //var fullsec_npcs = #s.ada.fullsec({npc:true});
    //var fullsec_npcs = ["#s.amal_robo.pub", "#s.archaic.info"];
    //var index = lib.rand_int(0, 1);
    if(args == null)
    {
        //var tar = fullsec_npcs[index];
        var target = #s.ada.scrape_t1({s:"amal_robo.pub"});
        return target;
    }

    
    /*return {
        ok: true,
        msg: "Target called. See 'debug' below to inspect the output.",
        debug: fullsec_npcs,
    }*/
}
