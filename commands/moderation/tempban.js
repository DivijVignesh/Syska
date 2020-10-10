module.exports={
    name: 'tempban',
    description: 'This command is used to give temporary ban to a person ',
    category: "moderation",
    run: async(client ,message , args)=>
    {
        const user1 = message.mentions.members.first();
        var date= args[1];
        if(isNaN(args[1])) return user.reply('You need to specify a valid time of ban');
        if(!isNaN(args[1])) date = parseInt(args[1]);

        //if(!args[1]) return message.channel.send('Time limit is not entered')
        if(message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("BAN_MEMBERS"))
        {
            if(user1)
            {
                const member = message.guild.member(user1);
                if(member)
                {
                    
                    member.ban({reason:'Temporary ban for bad behaviour' ,time: date})
                    .then(()=> message.channel.send(`${member} Is temporarily banned from the server for ${date} day(s)`))
                    .catch(err=> console.log(err))

                }

            }

        }

    }
}