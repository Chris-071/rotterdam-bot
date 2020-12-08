const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

    var eenheid = new discord.MessageEmbed()
        .setDescription("Wat is de `Eenheid` van de training?")
        .setColor("BLUE");

        var type = new discord.MessageEmbed()
        .setDescription("Wat is de `Type` van de training?")
        .setColor("BLUE");

        var tijd = new discord.MessageEmbed()
        .setDescription("Wat is de `Tijd` van de training")
        .setColor("BLUE");

        var cohost = new discord.MessageEmbed()
        .setDescription("Wie is de `Co-Host` van de training")
        .setColor("BLUE");

        var kijkersBewakers = new discord.MessageEmbed()
        .setDescription("Zijn Kijkers // Bewakers toegestaan?")
        .setColor("BLUE");

        var opmerkingen = new discord.MessageEmbed()
        .setDescription("Heb je nog `Opmerkingen` voor de training?")
        .setColor("BLUE");


    var channel = message.guild.channels.cache.get('785937205352333392');

    message.channel.send(eenheid);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();
        message.channel.send(type);

        message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord2 = antwoord.first();
            message.channel.send(tijd);

            message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                var antwoord3 = antwoord.first();
                message.channel.send(cohost);

                message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                    var antwoord4 = antwoord.first();
                    message.channel.send(kijkersBewakers);

                    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                        var antwoord5 = antwoord.first();
                        
                       
                        var uitkomst = new discord.MessageEmbed()
                        .setTitle("Training is aangemaakt!")
                        .setColor("BLUE")
                        .setDescription(`Eenheid: ${antwoord1}. \Type: ${antwoord2}. \Tijd: ${antwoord3}. \Co-Host: ${antwoord4}. \Host: ${message.author}. \Host: ${antwoord5}.\Host: ${message.author}. \nIs dit oke? Reageer hieronder.`);
    
                        
                    var gemaakt = new discord.MessageEmbed()
                    .setTitle("Training is aangemaakt!")
                    .setColor("BLUE");
    
                    var eventEmbed = new discord.MessageEmbed()
                        .setTitle(`${antwoord1} Training.`)
                        .addField("Eenheid:", antwoord1)
                        .addField("Type Training:", antwoord2)
                        .addField("Host:", message.author)
                        .addField("Co-Host:", antwoord3)
                        .setColor("BLUE");
    
                    message.channel.send(uitkomst).then(async msg => {
    
                        var emoji = await promptMessage(msg, message.author, 30, ["✔", "❌"]);
    
                        if (emoji === "✔") {
    
                            channel.send(eventEmbed);
                            msg.edit(gemaakt);
    
                        } else if (emoji === "❌") {
    
                            message.channel.send("Event gecanceld");
    
                        }
    
                    })

                    })
                })
            })
        })
    })


    async function promptMessage(message, author, time, reactions) {

        time *= 1000;


        for (const reaction of reactions) {
            await message.react(reaction);
        }

        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;


        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }

}

module.exports.help = {
    name: "event"
}
