  
const { readdirSync } = require("fs");
const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("cmd");
table.setHeading("cmd", "Load status");
module.exports = (client) => {
    readdirSync("./commands/").map(dir => {
        const commands = readdirSync(`./commands/${dir}/`).map(cmd=>{
            let pull = require(`../commands/${dir}/${cmd}`)
            if (pull) {
                client.commands.set(pull.name, pull);
                table.addRow(cmd, '✅');
            } else {
                table.addRow(cmd, `❌  -> missing a help.name, or help.name is not a string.`);
            }
            console.log(`Loaded command ${pull.name}`)
            client.commands.set(pull.name,pull)
            
        
           // didnt't make handler
            // if(pull.aliases){
            //     pull.aliases.forEach(p=>client.aliases.set(p,pull))
            // }
        })
    })
}