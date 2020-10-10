const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  disableEveryone: true,
});
const config = require("./botconfig.json");
const token = config.token;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;

["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith('=')) return;
  const prefix = '=';
  // If message.member is uncached, cache it.
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  // if(client.commands.has(cmd)){
  //   command = client.commands.get(cmd)
  // }
  // else
  // command = client.commands.get(client.aliases.get(cmd));

  if (command) {
    command.run(client, message, args);
  }

});
client.on('guildMemberAdd', async member => {
  require("./events/guild/memberAdd")(member)
})

//   client.on('guildMemberRemove', async (message) => {
//     require("./events/guild/memberRemove")(message)
//   })
client.login(process.env.TOKEN);