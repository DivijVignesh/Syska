module.exports = (client , message) =>{
    console.log('SyskaBot is online!'); // logginng on the console will tell us whether the bot is online or not
    client.user.setActivity('=cmds', { type: "LISTENING" }); // Setting of activity
    // client.user.setUsername('Syska Bot'); // sets the bots name
    // client.user.setStatus("online"); // sets the bots status
}