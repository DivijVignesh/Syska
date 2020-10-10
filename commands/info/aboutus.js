const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'aboutus',
    description: "this is a welcome command!",
    category: 'info',
    run: async(client , message, args)=>{
        const exampleEmbed = new MessageEmbed()
	    .setColor('#f10505')
        .setTitle('TEAM SYSKA')
        .setAuthor('ABOUT US' )
        .setDescription(`\n -We are a clan with passionate PUBG MOBILE players.\n-We are a new clan and currently building it to be one of the best.\n-We play CASUAL & COMPETETIVE PUBG MOBILE regularly.\n-We want to establish our name in the competitive level.`)
        .setThumbnail('https://cdn.discordapp.com/avatars/756796575350521916/a7fee28cfc3e40e0de61acd0a089f659.png?size=2048')
        .setFooter('Bot made by @divijak-47')
        .setImage('https://cdn.discordapp.com/icons/654212537973211156/aefdb10c3803b6d4997bdfda65c9d94e.webp?size=2048')
        
        message.author.send(exampleEmbed).catch(err => console.log(err));
        
        //message.delete();
    }
}