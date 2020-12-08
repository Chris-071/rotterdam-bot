const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

    var tijd = new discord.MessageEmbed()
        .setDescription("Wat is de `Tijd` van het event?")
        .setColor("BLUE");

    var event = new discord.MessageEmbed()
        .setDescription("Wat is het `Event`?")
        .setColor("BLUE");

    var cohost = new discord.MessageEmbed()
        .setDescription("Wie is de `Co-Host` van het event?")
        .setColor("BLUE");


    var channel = message.guild.channels.cache.get('785099032984289290');

    message.channel.send(tijd);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();
        message.channel.send(event);

        message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord2 = antwoord.first();
            message.channel.send(cohost);
            
            message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                var antwoord3 = antwoord.first();

                var uitkomst = new discord.MessageEmbed()
                .setTitle("Event is aangemaakt!")
                .setColor("BLUE")
                .setDescription(`Tijd: ${antwoord1},\nEvent: ${antwoord2}, \nCo-Host: ${antwoord3}. \n\n Is dit oke? Reageer hieronder.`);

                var eventEmbed = new discord.MessageEmbed()
                .setTitle("Event")
                .addField("Event:", antwoord2)
                .addField("Tijd:", antwoord1)
                .addField("Host:", message.author)
                .addField("Co-Host:", antwoord3)
                .setColor("BLUE");

                message.channel.bulkDelete(5).then(
                    message.channel.send(uitkomst).then(async msg => {

                        var emoji = await promptMessage(msg, message.author, 60, ["✔", "❌"]);

                        if (emoji === "✔"){
                            channel.send(eventEmbed);

                            
                        } else if (emoji === "❌") {
                            message.channel.send("Event gecanceld.");
                        }
                    })
                )
               
            })
        })
    }).catch(err => {
        message.channel.send("Error.");
    })

}

module.exports.help = {
    name: "event"
}

