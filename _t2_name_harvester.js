// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _t2_name_harvester.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4
// Chars:   760
// Descr:   Harvests T2 names from Bunnybat_hut, World_pop, or Blackstar.
// Syntax:  _t2_name_harvester
// Syntax:  _t2_name_harvester {x:0-2}
// =================================================================

// This is WIP and the documentation is missing

function(context, args) //0 = bunny, 1 = world, default = bunnny
{
    var i = 0;
    var j = 0;
    var log = [];
    var m = "";
    var p = "";
    var  debug = ["", "The", "World", "New", "L-1", "Blackstar", "Employees", "Take", "Profits", "XT-5", "Register", "Got", "Work", "REMINDER:", "Internal", "Feral", "Anyone", "For", "Setec", " Note", "Weyland"]
    var hits = 0;
    var x;
    var s;
 
    if(isNaN(args.x))
    {
        x = 0;
    } else {
        x = args.x
    }
 

    switch(x) {
        case 0:
            //s = #s.blackcore.pub_info({open:"updates"});
            s = #s.weyland.extern({cmd:"happening"});
            break;
        case 1:
            //s = #s.tyrell.external({navigation:"updates"});
            break;
        case 2:
            //s = #s.tyrell.external({navigation:"updates"});
            break;
        default:
            //s = #s.setec_gas.pub_info({get:"blog"});
            break;
    }
   
    //For each item in the output:
    while (++i < s.length) {
        //Break the first paragraph down to the first newline
        m = s[i].substr(s[i].search(/\n/)+1, s[i].length);
        //Find the first word in the setence.
        p = m.substr(0, m.search(/ /));
        j = 0;
        hits = 0;
        //Check the word against known garbage
        while(++j < debug.length) {
            if (p === debug[j]) {
                hits++;
            }
        }
 
        if(p === "'We've") {
            p = m.split(" ");
            log.push(p[9]);
        } else if(hits === 0) {
            log.push(p);
        }
   }
 
    return log;
}