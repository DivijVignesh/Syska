const { MessageEmbed} = require('discord.js')
module.exports = {
  name: 'kick',
  description: "this is a kick command!",
  category: "moderation",
  cooldown: +10,


  run: async( client, message, args)=> {
    if (!message.guild) return;
    


    if (message.content.startsWith('=kick')) {

      const user1 = message.mentions.members.first();
      const user = message.author;
      // if(user1.kickable) return message.reply(`${user1} belongs to staff and cannot be kicked `);

      if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("KICK_MEMBERS")) {
        // if(user1.hasPermission("MANAGE_MESSAGES") || user1.hasPermissons("ADMINISTRATOR")){
        //   user.reply('You can\'t kick this member because he is staff');
        //   return;
        // }

        if (user1) {

          const member = message.guild.member(user1);

          if (member) {
            const kickembed = new MessageEmbed()
              .setColor('0099ff')
              .setTitle('KICKED')
              .setDescription(`Successfully kicked ${member} from the server`)
              .setImage(client.users.cache.get(member.id).avatarURL())
              .setTimestamp()


            member.kick(`This person is kicked by ${user.tag}`).then(() => {

              
              const kickembeddm = new MessageEmbed()
                .setColor('0099ff')
                .setTitle('KICKED')
                .setDescription(`${member} Is kicked from the server for not following the rules and not maintaining discipline. \n You could dm the person mention to ask queries about your kick  `)
                .setTimestamp()
                client.users.cache.get(member.id).send(kickembeddm);
              message.channel.send(kickembed);

            }).catch(err => {

               message.reply('I was unable to kick the member');

              console.error(err);
            });

          } else {

            message.reply('That user isn\'t in this guild!');
          }

        } else {
          message.reply('You didn\'t mention the user to kick!');
        }
      } else message.reply('You don\'t have the permission to kick members');
    }
  }
}