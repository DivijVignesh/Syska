const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ban',
  description: "this is a ban command!",
  category: 'moderation',
  run: async (client, message, args) =>{
    const user = message.author;

    if (!message.guild) {
      return;
    }

    if (message.content.startsWith('=ban')) {
      const user1 = message.mentions.members.first();

      // if(user1.bannable) return message.reply(`${user1} belongs to staff and cannot be banned `);

      if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("BAN_MEMBERS")){

      if(!user1){
        message.reply('You did\'nt mention anyone!');
        return;
      }

      if (user1) {

        const member = message.guild.member(user1);

        if (member) {
          const banembed = new MessageEmbed()
              .setColor('0099ff')
              .setTitle('BANNED')
              .setDescription(`Successfully banned ${member} from the server `)
              .setTimestamp()
              .setImage(client.users.cache.get(member.id).avatarURL())

            member.ban({reason: `This person is banned by ${user.tag}` ,}).then(() => {
              message.channel.send(banembed);
              const banembeddm = new Discord.MessageEmbed()
              .setColor('0099ff')
              .setTitle('BANNED')
              .setDescription(`${member}You are banned from the server by ${user} for your bad behaviour.\n If you have any queries regarding your ban \n Message the authority `)
              .setTimestamp()
              client.users.cache.get(member.id).send(banembeddm)
            }).catch(err => {

                message.reply('I was unable to ban the member');

                console.error(err);
              });
        } else {

          message.reply('That user isn\'t in this guild!');
        }
      } 
    }else message.reply('You don\'t have the permissions to ban members');
  }
  }
}