// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _empty.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 1  ==** WARNING **==
// Chars:   418
// Descr:   Empties your current balance and unloaded upgrades into
//          your alt account (or mine if you are not carefull).
// Syntax:  _empty
// =================================================================
 
function (context, args)
{

    var ret;                                                        //
    var log;                                                        //
    var l = #s.scripts.lib();                                       //
    var i;                                                          //

    //SEC_LVL 3
    var balance = #s.accts.balance();                               // Get the current balance of your account.
    //SEC_LVL 1
    var upgrades = #s.sys.upgrades();                               // Get the all the upgrades of your account.
    
    ret = l.to_gc_str(balance) + " transferred: ";                  //

    //SEC_LVL 2
    log = #s.accts.xfer_gc_to({to:"loot", amount:balance});         // Tranfer the whole $balance to "loot". Change "loot" to your own name or else you will send all your money to me. You have been warned.
    ret += "\t" + log.ok + "\t" + log.msg;                          //

    for (i=upgrades.length-1; i>-1; i--)                            //
    {
        ret += "\n" + upgrades[i].name + " transferred: ";          //
        //SEC_LVL 1
        log = #s.sys.xfer_upgrade_to({i:i, to:"loot"});             // Tranfer all the unloaded upgrades to "loot". Change "loot" to your own name or else you will send all your upgrades to me. You have been warned.
        ret += "\t" + log.ok + "\t" + log.msg;                      //
    }
    
    return ret;                                                     // Print the log.
   
}
