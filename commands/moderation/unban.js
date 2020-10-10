const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'unban',
    description: 'This command is used to unban a person who is previously banned',
    category: 'moderation',

    run: async (client, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the permissions.')


        let messageArray = message.content.split(" ")
        let args1 = messageArray.slice(1);


        let toBan = await client.users.fetch(args1[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!")

        const reason = args1[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason).catch(err=> console.log(err));
        const exampleEmbed = new MessageEmbed()
            .setTitle('UNBANNED')
            .setDescription(`${toBan} You are unbanned`)
        message.channel.send(exampleEmbed);

    }
}