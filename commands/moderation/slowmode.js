module.exports={
    name: 'slowmode' ,
    description: 'This command is used to give cooldown to a user' ,
    cooldown: 5,
    category: "moderation",

    run: async( client , message ,args )=>
    { 
    
       if(!args[0]) return message.channel.send('You did not specify the time of cooldown');
       if(isNaN(args[0])) return message.channel.send('That is not a number');
       let reason = '';
       for(var i=1;i<=args.length;i++){
           reason = reason + " " + args[i];
       }
       message.channel.setRateLimitPerUser(args[0] , reason);
       message.channel.send(`Slowmode enabled: ${args[0]}sec`);
    }
}
