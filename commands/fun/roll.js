const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'roll',
    description: 'Rolls a dice and sends you a random number',
    run: async(client , message , args)=>{
        const user = message.author;
        if(!message.guild.member(user)) return ;
        if(args[0]=== 'dice' || args[1] === 'dice'){
            let roll = Math.floor(Math.random()*7);
            if(roll=== 0) roll = 3;
            const embed= new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Rolled a Dice')
            .setDescription(roll);

            message.channel.send(embed);
        }
    }
}