module.exports=async(member)=>{
        const channel = member.guild.channels.cache.find(ch => ch.name === 'spawn_island');
        if(!channel) return ;
        channel.send(`${member} Has just left the server`);


    }

