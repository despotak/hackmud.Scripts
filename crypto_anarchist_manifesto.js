// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// crypro_anarchist_manifesto.js
// -----------------------------------------------------------------
// author:  @archangel
// SEC LVL: 4
// Chars:   3014
// Descr:   Prints the crypro anarchist manifesto.
// Syntax:  crypro_anarchist_manifesto
// =================================================================

function(context, args)
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

	return "\n\
    A specter is haunting the modern world, the specter of crypto anarchy.\n\
    \n\
	Computer technology is on the verge of providing the ability for individuals and groups to communicate and interact with each other in a totally\n\
    anonymous manner. Two persons may exchange messages, conduct business, and negotiate electronic contracts without ever knowing the True Name, or\n\
    legal identity, of the other. Interactions over networks will be untraceable, via extensive re-routing of encrypted packets and tamper-proof boxes\n\
    which implement cryptographic protocols with nearly perfect assurance against any tampering. Reputations will be of central importance, far more\n\
    important in dealings than even the credit ratings of today. These developments will alter completely the nature of government regulation, the\n\
    ability to tax and control economic interactions, the ability to keep information secret, and will even alter the nature of trust and reputation.\n\
    \n\
    The technology for this revolution--and it surely will be both a social and economic revolution--has existed in theory for the past decade. The\n\
    methods are based upon public-key encryption, zero-knowledge interactive proof systems, and various software protocols for interaction, authentication,\n\
    and verification. The focus has until now been on academic conferences in Europe and the U.S., conferences monitored closely by the National Security\n\
    Agency. But only recently have computer networks and personal computers attained sufficient speed to make the ideas practically realizable. And the\n\
    next ten years will bring enough additional speed to make the ideas economically feasible and essentially unstoppable. High-speed networks, ISDN,\n\
    tamper-proof boxes, smart cards, satellites, Ku-band transmitters, multi-MIPS personal computers, and encryption chips now under development will\n\
    be some of the enabling technologies.\n\
    \n\
    The State will of course try to slow or halt the spread of this technology, citing national security concerns, use of the technology by drug dealers\n\
    and tax evaders, and fears of societal disintegration. Many of these concerns will be valid; crypto anarchy will allow national secrets to be trade\n\
    freely and will allow illicit and stolen materials to be traded. An anonymous computerized market will even make possible abhorrent markets for assas-\n\
	sinations and extortion. Various criminal and foreign elements will be active users of CryptoNet. But this will not halt the spread of crypto anarchy.\n\
    \n\
    Just as the technology of printing altered and reduced the power of medieval guilds and the social power structure, so too will cryptologic methods\n\
    fundamentally alter the nature of corporations and of government interference in economic transactions. Combined with emerging information markets,\n\
	crypto anarchy will create a liquid market for any and all material which can be put into words and pictures. And just as a seemingly minor invention\n\
    like barbed wire made possible the fencing-off of vast ranches and farms, thus altering forever the concepts of land and property rights in the\n\
    frontier West, so too will the seemingly minor discovery out of an arcane branch of mathematics come to be the wire clippers which dismantle the barbed\n\
    wire around intellectual property.\n\
    \n\
    Arise, you have nothing to lose but your barbed wire fences!"

}