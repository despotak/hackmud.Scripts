// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _t1_unlocker.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4
// Chars:   2287
// Descr:   T1 Lock hacker.
// Syntax:  _t1_unlocker {t:"username.loc"}
// Syntax:  _t1_unlocker {t:#s.dtr.t1_lock_sim}
// =================================================================

function (context, args)
{                                                                                                   // t:#s.dtr.t1_lock_sim

    var enter = new Date().getTime();                                                               // We want to measure the excecution time of our script. So we record the time at the start and the end of the script.
    var keys = { };                                                                                 // We will save all the keys here. (Keys are the pairs like ez_21:"open", or ez_prime:31)
    var t = args.t;                                                                                 // We parse the argument.
    var response = t.call({});                                                                      // We call into our target for the first time to get the first response.
    
    var debug = "DEBUG LOG\n=========\n" + response + "\n";                                         // Start writing the debug log.
    
    // These are all the possible keys
    var picks = ["open","unlock","release"];                                                        // We need this for every kind of EZ_ lock.
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];          // These are all the prime numbers up to 100.
    var colors = ["blue", "cyan", "green", "lime", "yellow", "orange", "red", "purple"];            // These are the colors for the c00x locks.

    var i = 0;                                                                                      // Simple index we will need for our loops.

    while(response.includes("+LOCK_ERROR+"))                                                        // We will execute this while there is still a LOCK_ERROR (at least one lock is still there).
    {
        ////////////////////
        // EZ_21 Unlocker //
        ////////////////////
        if(response.includes("!EZ_21!") && !response.includes("!LOCK_UNLOCKED! EZ_21"))             // Is the next lock an EZ_21?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!LOCK_UNLOCKED! EZ_21") && response.includes("+LOCK_ERROR+")) // We will execute this while there is not an unlocked EZ_21 and there is still a LOCK_ERROR.
            {
                keys["EZ_21"] = picks[i++];                                                         // Create an EZ_21:"$pick" pair.
                response = t.call(keys);                                                            // Try the key.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }
        }
        ///////////////////
        //EZ_35 Unlocker //
        ///////////////////
        else if (response.includes("!EZ_35!") && !response.includes("!LOCK_UNLOCKED! EZ_35"))       // Is the next lock an EZ_35?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("digit"))                                                      // We will execute this until we are prompted for a "digit" input.
            {
                keys["EZ_35"] = picks[i++];                                                         // Create an EZ_35:"$pick" pair.
                response = t.call(keys);                                                            // Try the key.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }

            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!LOCK_UNLOCKED! ez_35") && response.includes("+LOCK_ERROR+")) // We will execute this while there is not an unlocked EZ_35 and there is still a LOCK_ERROR.
            {
                keys["digit"] = i++;                                                                // Create an digit:"$digit" pair.
                response = t.call(keys);                                                            // Try the key.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }
        }
        ///////////////////
        //EZ_40 Unlocker //
        ///////////////////
        else if (response.includes("!EZ_40!") && !response.includes("!LOCK_UNLOCKED! EZ_40"))       // Is the next lock an EZ_40?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!ez_prime!"))                                                 // We will execute this until we are prompted for an "ez_prime" input.
            {
                keys["EZ_40"] = picks[i++];                                                         // Create an EZ_40:"$pick" pair.
                response = t.call(keys)                                                             // Try the key.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }
           
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!LOCK_UNLOCKED! EZ_40") && response.includes("+LOCK_ERROR+")) // We will execute this while there is not an unlocked EZ_40 and there is still a LOCK_ERROR.
            {
                keys["ez_prime"] = primes[i++]                                                      // Create an ez_prime:$prime pair.
                response = t.call(keys)                                                             // Try the key.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }
        }
        //////////////////
        //c001 Unlocker //
        //////////////////
        else if(response.includes("!c001!") && !response.includes("!LOCK_UNLOCKED! c001"))          // Is the next lock a c001?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!color_digit!") && response.includes("+LOCK_ERROR+"))         // We will execute this while there is not an unlocked c001 and there is still a LOCK_ERROR.
            {
                keys["c001"] = colors[i];                                                           // Create a c001:$color pair.
                var l = "" + colors[i++];                                                           // 
                keys["color_digit"] = l.length;                                                     // Create a color_digit:$length_of_corol_name pair.
                response = t.call(keys);                                                            // Try the keys.
                debug += response + "\n";                                                           // Append the result to the debug log.
            }
        }
        //////////////////
        //c002 Unlocker //
        //////////////////
        else if(response.includes("!c002!") && !response.includes("!LOCK_UNLOCKED! c002"))          // Is the next lock a c002?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!LOCK_UNLOCKED! c002") && response.includes("+LOCK_ERROR+"))  // We will execute this while there is not an unlocked c002 and there is still a LOCK_ERROR.
            {
                keys["c002"] = colors[i];                                                           // Create a c002:$color pair.
                keys["c002_complement"] = colors[(i+4)%8];                                          // Create a c002_complement:$color pair. (The colors table is set so that complements are 4 indexes apart).
                response = t.call(keys);                                                            // Try the keys.
                debug += response + "\n";                                                           // Append the result to the debug log.
           
                i++;                                                                                // Increase the index.
            }
        }
        //////////////////
        //c003 Unlocker //
        //////////////////
        else if(response.includes("!c003!") && !response.includes("!LOCK_UNLOCKED! c003"))          // Is the next lock a c002?
        {
            i = 0;                                                                                  // Reset the index.
            while(!response.includes("!LOCK_UNLOCKED! c003") && response.includes("+LOCK_ERROR+"))  // We will execute this while there is not an unlocked c003 and there is still a LOCK_ERROR.
            {
                keys["c003"] = colors[i];                                                           // Create a c003:$color pair.
                keys["c003_triad_1"] = colors[(i+3)%8];                                             // Create a c003_triad_1:$color pair. (Triads are the colors next to the compliments, so 3 and 5 indexes away from the color).
                keys["c003_triad_2"] = colors[(i+5)%8];                                             // Create a c003_triad_2:$color pair. (Triads are the colors next to the compliments, so 3 and 5 indexes away from the color).
                response = t.call(keys);                                                            // Try the keys.
                debug += response + "\n";                                                           // Append the result to the debug log.
            
                i++;                                                                                // Increase the index.
            }
        } 
    }

    var exit = new Date().getTime() - enter;                                                        // We want to measure the excecution time of our script. So we record the time at the start and the end of the script.
    debug += "\nEXECUTION TIME: " + exit + "ms";                                                    // Append the execution time to the debug log.
    
    return {
        ok: true,                                                                                   // Return Successfuly.
        msg: debug,                                                                                 // Print the debug log. Commnet out this line to hide the debug info.
      //msg: response,                                                                              // Print the last response. Uncoment this line to get the last response from the victim.
    };
   
}