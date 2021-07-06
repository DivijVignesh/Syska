module.exports=async(member)=>{
    console.log(`someone joined ${member}`);
        console.log("Member")
        const channel = member.guild.channels.cache.find(ch => ch. name === 'spawn_island');
        if(!channel) return ;
        channel.send(`${member} Has just left the server`);


    }

