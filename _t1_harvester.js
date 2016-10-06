// ________                                                _________
// \________\--------___       ___         ____----------/_________/
//     \_______\----\\\\\\   //_ _ \\    //////-------/________/
//         \______\----\\|| (( ~|~ )))  ||//------/________/
//             \_____\---\\ ((\ = / ))) //----/_____/
//                  \____\--\_)))  \ _)))---/____/
//                        \__/  (((     (((_/
// ヾღ彡                   |  -)))  -  ))
// =================================================================
// _t1_harvester.js
// -----------------------------------------------------------------
// author:  @nlight, @archangel
// SEC LVL: 4
// Chars:   
// Descr:   Harvest t1 loc's in under 500 symbols
//          Use with targets from ada.fullsec { npc: true }
// Syntax:  _t1_harvester{t: #s.some_corp.loc }
// =================================================================

function(c, a)
{
    var _ = (c, p) => { c.forEach(p) }, // loop utility method
		r = a.t.call({}), // first call to get method names
		k = /d with ([a-z]+):/.exec(r)[1], // extract command key
		j = /y with [a-z]+:"([a-z]+)"/.exec(r)[1], // extract special command
		o = / \"([a-z_]*)\"/g, // extract commands
		n = [], // list of commands
		p = /y ([a-zA-Z_]*) an/, // password regex
		v, // password
		x = [], // project names
		b = [], // results
		q = {},
		z = [/ject ([a-zA-Z_.]*) /, /e for ([a-z_0-9.]+)\. /, /on ([a-z()0-9_]+) pr/] // project name patterns
	
    while(c = o.exec(r)) {
        n.push(c[1])
    }
	
    _(n, c => { // for each command
        q[k] = c
        r = a.t.call(q) // run the script
		
        if((typeof r)[0]!="s") // if we get an array parse the individual items for projects
            _(r, q => {
                _(z, z => {
                    o = z.exec(q)
                    if(o) x.push(o[1])
                })
            })
        else { // if we get a single item parse it for passwords
            o = p.exec(r)
            if(o) v = o[1]
        }
    })
	
    _(x, h => { // for each project
        p = {project: h, password: v, pass: v, p: v}
        p[k] = j
        r = a.t.call(p) // call the script to get the npc locs
        _(r, g => { // for each npc loc push it in the results array
            b.push(g)
        })
    })
	
    return b
}