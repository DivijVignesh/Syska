const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'announce',
    description: "posts a message behalf of a administrator",
    category: 'moderation',

    run: async(client , message, args)=> {
        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("You do not have the permission to use this command");
            return;
        }
        var msg = '';
        let a = args.length;
        for (var i = 0; i < a; i++) {
            msg = msg+ args[i] + ' ';
        }
        try {
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor(msg)
                        
                       message.channel.send(exampleEmbed);
                    
                } catch (err) {
                    message.reply('Error sending a Dm message');
                    console.log(err);

                }
        message.delete();
    }
}