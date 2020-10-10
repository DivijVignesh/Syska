const {MessageEmbed, Message} = require('discord.js')

module.exports={
    name:'fun',
    description: 'This command sends the user an embed consisting of all fun commands ',
    guildOnly: true,
    run: async(client , message , args)=>{
        const user = message.author;
        if(!message.guild.member(user)) return;
        const funembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('FUN COMMANDS')
        .setURL('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
        .setAuthor('Syska Bot', 'https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
        .setThumbnail('https://cdn.discordapp.com/icons/654212537973211156/aefdb10c3803b6d4997bdfda65c9d94e.webp?size=2048')
        .setDescription('Mention `=` before all commands')
        .addFields(
            {name: '1) =avatar @tag' , value: 'This command sends the avatar/profile pic of a mentioned user'},
            {name: '2) =dm @tag `The message you want to dm them` ' , value: 'This commmand will make the bot a send a  dm message on behalf author '},
            {name: '3) =images `A name of a image which you want to search`' , value: 'This command searches a mentioned topic image'},
            {name: '4) =memes' , value: 'This command will search top memes and displays random memes'},
            {name: '5) =poll `Poll question here`' , name: 'This command will create a simple yes or no poll'},
            {name: '6) =clearmsg `number`', value: 'This will send the latency between the Bot and the user' },
            {name: '7) =ytchannel' , value: 'This command will send you a yt channel of the creator of this bot'}

        )
        .setFooter('Syska Bot')
        .setTimestamp();

        client.users.cache.get(user.id).send(funembed)
        // .then(()=> message.delete())
        .catch(err=> console.log(err));

    }
}