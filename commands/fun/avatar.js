const { MessageEmbed } = require('discord.js');



   module.exports={
    name: 'avatar',
    description: 'Gives the avatar of the mentioned person',
    category: 'info',
   
   run:async(client, message, args)=> {
        const member = message.mentions.users.first();
        if(!member){
            message.reply('You need to mention a person to use this command.')
            return;
        }
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Syska Bot')
            .setDescription(`Avatar of ${member.tag}`)
            //.addField('Inline field title', 'Some value here', true)
            .setTimestamp()
            .setImage(client.users.cache.get(member.id).avatarURL());
        message.reply(exampleEmbed);
    }
}
