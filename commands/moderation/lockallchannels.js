module.exports = {
    name: 'lockallchannels',
    description: 'This command locks all the channels present in the guild.This can be used for maintenance or avoids raid',
    category: "moderation",

    run: async (client, message, args) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        // const members1 = message.guild.roles.cache.filter(r => r.isR)
    //    const filtermember = members1.filter(u=> u.name)
    //     console.log(filtermember)
    const server= message.guild.id;
        if (args[0] === 'on') {
            await channels.forEach(channel=>{
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(()=> channel.setName(channel.name += `🔒`))
            })
            
            return await message.channel.send('locked all channels');
        } else if (args[0] === 'off') {
            await channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(()=> channel.setName(channel.name.replace('🔒', '')))
             })
             
                
            return await message.channel.send('unlocked all channels')
        } else message.channel.send('Incorrect command format! This command takes only on or off ')    }
}