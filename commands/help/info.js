const {MesssageEmbed, MessageEmbed} = require('discord.js');

module.exports={
    name: 'info',
    description:' This command is going to send all the info commands related to the bot',
    
    run: async(client ,  message ,args)=>
    {
        const user = message.author;
        if(!message.guild.member(user)) return;
        const infoembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('INFO COMMANDS')
        .setURL('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
        .setAuthor('Syska Bot', 'https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
        .setThumbnail('https://cdn.discordapp.com/icons/654212537973211156/aefdb10c3803b6d4997bdfda65c9d94e.webp?size=2048')
        .setDescription('Mention `=` before all commands')
        .addFields(
            {name: ' 1) =aboutus' , value: 'Tells about Team Syska'},
            {name: ' 2) =cmds ' , value: 'This help command tells you about the commands in Syska Bot'}
        )
        .setFooter('Syska Bot')
        .setTimestamp();

        client.users.cache.get(user.id).send(infoembed)
        .then(()=> message.delete() )
        .catch(err=> console.log(err));
    
}
}