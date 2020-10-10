const request = require('request');
const cheerio = require('cheerio');

var version = '1.3';

module.exports={
    name: 'images',
    description: 'This fun command randomly searches images and sends them ',
    run: async(client , message , args)=>
    {
        var search = '';
        if(!args[0]){
            search='food'
        }
        for(var i=0; i< args.length; i++){
           search = search +' '+ args[i] ;
        }
        image(message ,search);
    }
    }

function image(message ,search){
 
    var options = {
        url: `http://results.dogpile.com/serp?qc=images&q=${search}`,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       // console.log(urls);
        if (!urls.length) {
            return;
        }
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
