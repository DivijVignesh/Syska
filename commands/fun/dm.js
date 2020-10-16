const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'dm',
    description: 'This command is going to be used to send a dm message to a mentioned user ',
    category: "moderation",

    run: async(client, message, args)=> {
        var dmmessage = '';
        const user = message.mentions.users.first();
        const send = message.author;
        let a = args.length;
        for (var i = 1; i < a; i++) {
            dmmessage = dmmessage + args[i] + ' ';
        }
        
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                try {
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(`Sent by ${send.tag}`)
                        .setAuthor('Syska Bot DM message')
                        .setDescription(dmmessage)
                        
                       // message.author.send(exampleEmbed).catch(err => console.log(err));
                        client.users.cache.get(user.id).send(exampleEmbed);
                    //client.users.cache.get(user.id).send(`Message sent by ${send} \n ` + dmmessage);
                    console.log('Dm message sent successfully');
                    message.channel.send(`Dm message sent successfully to ${user}` )
                } catch (err) {
                    message.reply('Error sending a Dm message');
                    console.log(err);

                }
                message.delete();
            }
        }

    }

}