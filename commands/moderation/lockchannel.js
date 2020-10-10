module.exports = {
    name: 'lockchannel',
    description: 'This command locks down a particular channel in case of maintainance or spam',
    category: "moderation",

    run: async (client, message, args) => {
        const channel = message.channel;
        if (args[0] === 'on') {
             channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
               await channel.setName(channel.name += `🔒`);
               console.log('Locked the channel');
               
               return message.channel.send('Locked the channel')
        } else if (args[0] === 'off') {

             channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true
            }) 
             await channel.setName(channel.name.replace('🔒', ''));
            //  console.log('Channel is unlocked');
        
            return message.channel.send('Unlocked the channel')
            
        } else return message.channel.send('Invalid command format! =lockchannel command takes only ON or OFF commands')

    }
}