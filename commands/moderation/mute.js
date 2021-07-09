const { Collection } = require('discord.js');
const guilds = new Collection();
module.exports = {
    name: 'mute',
    category: "moderation",

    run: async(client, message, args)=> {
        if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("MUTE_MEMBERS")){
        if (!message.mentions.users.first())
            return message.reply('The user is not mentioned');
        let user = message.mentions.members.first();
        let role = message.guild.roles.cache.find(ro => ro.name === 'Muted');
        if (!role) {
            message.guild.roles.create({
                data: {
                name: 'Muted',
                color: 'BLUE',
                deny: ['SEND_MESSAGES']
            },
        reason: 'Syska Bot: Created this role to mute people',
        })
        .then(console.log)
        .catch(console.error);
        role = message.guild.roles.cache.find(ro => ro.name === 'Muted');
            message.reply('Created a role named `Muted` to mute members.');
        }
        if (!user)
            return message.reply('The member is not in the server');
        if (user.bot)
            return message.reply(`You cannot mute ${user} because it is a bot`);
        if (user.hasPermission("ADMINISTRATOR"))
            return message.reply(`You can't mute ${user} becuase he is a moderator `);
        if (user.roles.cache.has(role.id)) {
            message.reply('The person is already muted');
            return;
        }
        user.roles.add(role.id)
            .then(r => message.channel.send(`I muted ${user}`))
            .catch(e => console.log(e));


    }else message.reply('You don`t have the permission to mute members');
}
}

