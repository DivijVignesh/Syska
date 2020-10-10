module.exports={
    name: 'clearmsg',
    description: 'This clears the messages ',
    category: "moderation",

    run: async(client , message , args)=>
        {
        
            try {

                if (message.member.hasPermission("MANAGE_MESSAGES") && message.member.hasPermission("ADMINISTRATOR")) {
                    let number = parseInt(args[0]) + 1;
                    //messages = await message.channel.messages.fetch(number);
                    await message.channel.bulkDelete(number, true);
                }
                else
                    message.reply('You dont have the permission to use this command');
            } catch (e) {
               message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
                console.log(e);
            }
        }
}