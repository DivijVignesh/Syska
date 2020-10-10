module.exports= async(member)=>{

const channel = member.guild.channels.cache.find(ch => ch.name === 'spawn_island');
// Choosing the channel where you want to send welcome message
if (!channel) return;
//if no such channel is found return

channel.send(`Welcome to **Team Syska** \n Do Check out the <#654213786198212608> before you proceed. ${member}`);

member.send(`Welcome to **Team Syska**. \n Read the <#654213786198212608>. \n React to <#757157609571876886> to give yourself roles ${member}`);

};