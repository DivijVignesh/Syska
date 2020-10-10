module.exports={
    name: 'stopslowmode' ,
    description: 'This command is used to give cooldown to a user' ,
    cooldown: 5,
    category: "moderation",
    
    run: async(clietn , message ,args )=>
    { 
      // if(!args.length === 0) return ; 
       message.channel.setRateLimitPerUser(0);
       message.channel.send(`Slowmode disabled`);
    }
}
