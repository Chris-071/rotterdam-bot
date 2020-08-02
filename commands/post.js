const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        var embed = new discord.MessageEmbed()
        .setDescription("Wat voor post wil je doen? <Suggestie/Bug/Tip/Top>")
        .setColor("#14e378");

    
     message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 30000 }).then(collected => {
 
                    if (collected.first().content.toLowerCase() == 'suggestie') {

                        const suggestieCol = m => m.author.id === message.author.id;
                        message.reply("Wat voor suggestie wil je doen?");
                        message.channel.awaitMessages(suggestieCol, {
                            max: 1,
                            time: 100000
                        }).then(collected => {

                            var suggestieEmbed = new discord.MessageEmbed()
                            .setTitle(`Nieuwe suggestie van ${message.author}`)
                            .setColor("#14e378")
                           .addField("Suggestie:", suggestieCol);



                        }).catch(err => {
                            message.reply("Geen suggestie opgegeven.")
                        });

                       
                    } else if (collected.first().content.toLowerCase() == 'bug') {
                       
                    } else if (collected.first().content.toLowerCase() == 'tip') {
                       
                    }else if (collected.first().content.toLowerCase() == 'top') {
                       
                    }
                    
 
                }).catch(() => {
                    message.reply('Geen antwoord na 30 sec, geanuleerd.');
                });


}

module.exports.help = {
    name: "post"
}
