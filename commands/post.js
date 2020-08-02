const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        var embed = new discord.MessageEmbed()
        .setDescription("Wat voor post wil je doen? <Suggestie/Bug/Tip/Top>")
        .setColor("#14e378");
        message.channel.send(embed);

    
     message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 30000 }).then(collected => {
 
                    if (collected.first().content.toLowerCase() == 'suggestie') {


                        var kanaal = message.guild.channels.cache.get('739457275520876584')
                        if(!kanaal) return message.reply("Kanaal **Posts** niet gevonden");
                        kanaal.send("Test");
 
                       
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
