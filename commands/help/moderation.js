const {MessageEmbed} = require('discord.js')

module.exports={
    name: 'moderation',
    description: 'This will sends a list of all moderation commands',
     run: async(client , message , args)=>{
         const user = message.author;
         if(!message.guild.member(user)) return;
         const moderationembed = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle('MODERATION COMMANDS')
         .setURL('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
         .setAuthor('Syska Bot', 'https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
         .setDescription('Mention `=` before all commands')
         .setThumbnail('https://cdn.discordapp.com/icons/654212537973211156/aefdb10c3803b6d4997bdfda65c9d94e.webp?size=2048')
         .addFields(
            { name: '1) =kick @tag', value: 'This comamnd will kick the mentioned person out of the server(works only mods)'},
            { name: '2) =ban @tag', value: 'This will ban the mentioned person from the server(works for moderator only)'},
            { name: '3) =slowmode `time in sec`', value: 'Enables slowmode according to the time mentioned' },
            { name: '4) =stopslowmode ', value: 'This disables the slowmode of a channel if enabled' },
            { name: '5) =clearmsg `number`', value: 'This will delete the messages in channel according to the number of messages as provided in the command' },
            { name: '6) =lockchannel `ON/OFF`', value: 'This command locks on or off the channel in which the message is mentioned.' },
            { name: '7) =lockallchannels `ON/OFF`', value: 'This command locks all channels in the server on /off .This can be used as anti-raid' },
            { name: '8) =invite ', value: 'This creates a temporary server invite for 1 day and can be created by anyone' },
            { name: '9) =invite p/permanent', value: 'This command creates a permanent invite of the server and could be only used by moderators' },
            { name: '10) =tempban @tag `No. of Days`', value: 'This will give a temporary ban to a particular person' },
            { name: '12) =mute @tag ', value: 'This will mute the mentioned person i.e The person won`t be able to send messgaes ' },
            { name: '13) =unmute @tag ', value: 'This will unmute the mentioned person' },
         )
         .setTimestamp()
         .setFooter('Syska Bot', 'https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048');
         message.channel.send('An email has been sent to you!');
        client.users.cache.get(user.id).send(moderationembed)
         .catch(e=> console.log(e));
                  
     }
}