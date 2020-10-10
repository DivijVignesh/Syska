const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    description: 'This command gives the ping ',
    run: async(client , message , args)=>{
        if (message.content === '=ping') {  
            const pingembed = new MessageEmbed()
            .setColor('#e2b31a')
            .setTitle('Bot Ping')
            .setDescription(`Latency: ${Math.round(client.ws.ping)}ms`)
            .setFooter('Syska Bot')
            .setTimestamp();
            message.channel.send(pingembed);

            // message.channel.send(`BOT Latency is ${Math.round(client.ws.ping)}ms`);
          }

    }
}