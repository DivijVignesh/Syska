module.exports = {
    name: 'ytchannel',
    description: "this is a stupidcreativity channel command!",
    category: 'info',

    run: async(client , message, args)=> {
        message.channel.send('https://www.youtube.com/stupidcreativity');
        // message.author.send('https://www.youtube.com/stupidcreativity');
        // message.delete();
    }
}