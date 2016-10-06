// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// acct_sum.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 3 -- WARNING --
// Chars:   1330
// Descr:   Returns formated inforamtion from your transaction log
// Syntax:  acct_sum{from:"starting timecode" , to:"ending timecode"}
// Syntax:  acct_sum{count:_int}
// Syntax:  acct_sum{count:"all"}
// =================================================================

function (context, args)
{
    //{from:"starting timecode" , to:"ending timecode"}

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

    //SEC LVL 3
    var trans = #s.accts.transactions({count:"all"});
    var results = [];
    var ret;
    var earned = 0;
    var m_earned = 0;
    var spent = 0;
    var m_spent = 0;
    var net = 0;
    var l = #s.scripts.lib();
    
    if(args.count)
    {
        if (args.count == "all")
        {
            results = trans;
        }
        else
        {
            for (var i=0; i<args.count; i++)
            {
                results.push(trans[i]);
            }
        }
        
    }
    else
    {
        for (var i=0; i<trans.length; i++)
        {
            if (l.to_game_timestr(trans[i].time)>=args.from && l.to_game_timestr(trans[i].time)<=args.to)
                results.push(trans[i]);
        }
    }

    ret = "Range from\t: " + args.from + "\nRange to\t: " + args.to +"\n\n";

    for (var i=0; i<results.length; i++)
    {
        ret += (results[i].memo) ? "[M]\t" : "\t";
        //ret += "\t" + results[i].time + "\t\t";
        ret += "\t" + l.to_game_timestr(results[i].time) + "\t\t";
        if(results[i].sender == context.caller) 
        {
            ret += "`D-`";
            spent += results[i].amount;
            m_spent += (results[i].memo) ? results[i].amount : 0;
        }
        else
        {
            ret += "`2+`";
            earned += results[i].amount;
            m_earned += (results[i].memo) ? results[i].amount : 0;
        }
        ret += l.to_gc_str(results[i].amount) + "\n";
    }

    net = earned - spent;

    ret += "\n" + "=".repeat(40) + "\n"
    ret += "\nEarned total\t:\t\t" + l.to_gc_str(earned).toString() + "\n[M]Earned total\t:\t\t" + l.to_gc_str(m_earned) + "\n[!M]Earned total:\t\t" + l.to_gc_str(earned - m_earned) + "\nSpent total\t\t:\t\t" + l.to_gc_str(spent) + "\n[M]Spent total\t:\t\t" + l.to_gc_str(m_spent) + "\n[!M]Spent total\t:\t\t" + l.to_gc_str(spent - m_spent) +"\nNet total\t\t:\t\t" + l.to_gc_str(net) +"\n"

    return ret;
}