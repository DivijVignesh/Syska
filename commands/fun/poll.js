const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'poll',
    description: 'This command is going to set up a simple yes or no poll ',
    run: async(client , message , args)=>{
        if(!args[0]){
            const helpembed = new MessageEmbed()
            .setColor('0x99ff')
            .setTitle('Poll Helper')
            .setDescription('To create a simple YES or NO polls use : =poll THE MESSAGE YOU WANT TO ASK IN POLL')

            message.channel.send(helpembed);
            return;
        }
        var pollquestion = '';
        for(var i=0; i< args.length; i++){
           pollquestion = pollquestion +' '+ args[i] ;
        }
        const pollembed = new MessageEmbed()
        .setColor('0x99ff')
        .setTitle('POLLS')
        .setDescription('**'+ pollquestion +'**');
        
        const poll = await message.channel.send(pollembed)
        poll.react(`✅`);
        poll.react(`⛔`);
        
    }
}