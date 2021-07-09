module.exports = {
    name: 'announce',
    description: "posts a message behalf of a administrator",
    category: 'moderation',

    run: async(client , message, args)=> {
        var msg = '';
        let a = args.length;
        for (var i = 0; i < a; i++) {
            msg = msg+ args[i] + ' ';
        }
        message.channel.send(msg);
        message.delete();
    }
}