const { Message } = require("discord.js");

module.exports = {
    name: 'invite',
    description: 'Creates a temporary invitation of that particular guild',
    run: async (client, message, args) => {
        let channel = message.channel;
        if (!message.content.startsWith(`=invite`)) return;
        if (!args[0]) {
            channel.createInvite({ unique: true })
                .then(invite => {
                    message.reply("Hey! I've created you an invite: https://discord.gg/" + invite.code)
                }).catch(e => {
                    console.log(e);
                    message.channel.send(`There is a error while creating a invite. Please try again later`)
                })
        }
        if (args[0]) {
            const author = message.member;
            if (author.hasPermission("MANAGE_SERVER")) {
                if (!args[0]==='permanent' ||!args[0]=== 'p') return;
                if (args[0]==='p' ||args[0]=== 'permanent') {
                    channel.createInvite({ maxAge: 0, maxUses: 0, unique: false })
                        .then(invite => message.reply(`Hey ! I've created you a permanent invite: https://discord.gg/` + invite.code))
                        .catch(err => {
                            console.log('There is some error while creating invite ' + err);
                            message.reply("There is some error while creating invite. Please try again later");
                        })
                }
            }
        }

    }
}