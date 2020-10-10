const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    description: 'This command gives the ping ',
    run: async(client , message , args)=>{
        if (message.content === '=ping') {  
            const ping = await Date.now()-message.createdTimestamp;
            const api = await Math.round(client.ws.ping);
            const pingembed = new MessageEmbed()
            .setColor('#e2b31a')
            .setTitle('Bot Ping')
            .setDescription(`Your ping is ${ping} ms\nAPI Latency: ${api}ms`)
            .setFooter('Syska Bot')
            .setTimestamp();
            message.channel.send(pingembed);

            // message.channel.send(`BOT Latency is ${Math.round(client.ws.ping)}ms`);
          }

    }
}