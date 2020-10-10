module.exports = {
    name: 'unmute',
    description: 'This command unmutes a person ',
    category: 'moderation',
    run: async(client , message, args)=> {
        if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("MUTE_MEMBERS")){
        if (!message.mentions.users.first())
            return message.reply('The user is not mentioned');
        let user = message.mentions.members.first();
        let usermention = message.guild.member(user);
        let role = message.guild.roles.cache.find(ro => ro.name === 'Muted');
        if (!role) {
            return message.channel.send('He is not muted');
        }
        user.roles.remove(role.id)
        .then(message.channel.send(`Unmuted ${user}`))
        .catch(e => console.log(e));

    }else message.reply('You don`t have the permission to use this command')
}
}