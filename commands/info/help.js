const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    aliases: 'cmds',
    category: 'info',
    decription: 'This command is used to display all the commands which could be used by a user',
    run: async(client, message, args)=>{

        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Command List')
            .setURL('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
            .setAuthor('Syska Bot', 'https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
            .setDescription('Mention `=` before all commands')
            .setThumbnail('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
            .addFields(
                { name: '1) =moderation', value: 'Sends you the list of all moderation commands.' },
                { name: '2) =fun ', value: 'This command will send you the details of all fun commands offered by Syska Bot' },
                { name: '3) =info', value: 'Provides you all the information about the bot' },
            )
            .setTimestamp()
            .setFooter('Syska Bot', 'https://cdn.discordapp.com/icons/654212537973211156/aefdb10c3803b6d4997bdfda65c9d94e.webp?size=2048');
            const user = message.author;
            message.channel.send(exampleEmbed);
        //    client.users.cache.get(user.id).send(exampleEmbed)
        //     .catch(e=> console.log(e));
            
            
    }
    
}