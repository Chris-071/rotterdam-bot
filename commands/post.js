const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        var embed = new discord.MessageEmbed()
        .setDescription("Wat voor post wil je doen? <Suggestie/Bug/Tip/Top>")
        .setColor("#14e378");
        message.channel.send(embed);

        const filter = m => m.content.includes('discord.js');
        var kanaal = message.guild.channels.cache.get('739234706142527559')

    
     message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 30000 }).then(collected => {
 
                    if (collected.first().content.toLowerCase() == 'suggestie') {

                        const sugCollector = message.channel.createMessageCollector(filter, {time: 15000});

                        var embedSug = new discord.MessageEmbed()
                        .setTitle("Nieuwe suggestie!")
                        .addField("Suggestie van:", message.author)
                        .addField("Suggestie:", sugCollector)

                        kanaal.send(embedSug);
 
                       
                    } else if (collected.first().content.toLowerCase() == 'bug') {
                       
                    } else if (collected.first().content.toLowerCase() == 'tip') {
                       
                    }else if (collected.first().content.toLowerCase() == 'top') {
                       
                    }
                    
 
                }).catch(err => {
                    message.reply("Error")
                });


}

module.exports.help = {
    name: "post"
}
