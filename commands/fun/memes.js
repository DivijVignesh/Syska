const request = require('request');
const randomPuppy = require('random-puppy');

var version = '1.3';

module.exports={
    name: 'memes',
    description: 'This fun command randomly searches memes in the internet ',
    run: async(client , message ,args)=>{

       
    let reddit = [
        "meme",
        "DankMemesFromSite19",
        "memesITA",
        "animememes",
        "starwarsmemes",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

}
}