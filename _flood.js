﻿// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _flood.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 2 == WARNING ==
// Chars:   100
// Descr:   
// Syntax:  _flood
// =================================================================

function (context, args)
{
    var i = 0;
    for (i=0; i<15; i++)
    {
        if(args.to)
        {
            #s.accts.xfer_gc_to({ to:args.to, amount:"1GC" });     //SEC_LVL 2
        }
        else
        {
            #s.accts.xfer_gc_to({ to:"archdaemon", amount:"1GC" });     //SEC_LVL 2
        }
    }

}