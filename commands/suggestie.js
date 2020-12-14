const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var Suggestie = new discord.MessageEmbed()
        .setDescription(`Hallo ${message.author}, Vertel wat jou 'Suggestie' is.`)
        .setColor("BLUE");


    var channel = message.guild.channels.cache.get('786166787850764288');

    message.channel.send(Suggestie);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();

        var uitkomst = new discord.MessageEmbed()
            .setTitle("Suggestie is aangemaakt")
            .setColor("BLUE")
            .setDescription(`Suggestie: ${antwoord1}, Is dit oke?`);


        var gemaakt = new discord.MessageEmbed()
            .setTitle("Bedankt voor je Suggestie!")
            .setColor("BLUE");

        var embed = new discord.MessageEmbed()
            .setTitle("<:suggestion:786160911610019860> Suggestie")
            .addField("Suggestie:", antwoord1)
            .setFooter(`Suggestie van ${message.author.tag} (${message.author.id})`)
            .setColor("BLUE");

        message.channel.send(uitkomst).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✔", "❌"]);

            if (emoji === "✔") {

                channel.setTopic(`Nieuwste Suggestie van: ${message.author}.`)
                channel.send(embed).then(embedMessage => {
                    embedMessage.react("✔");
                    embedMessage.react("❌");
                })
                msg.edit(gemaakt);

            } else if (emoji === "❌") {

                message.channel.send("Suggestie gecanceld");

            }



        }).catch(err => {
            message.channel.send("Error.");
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
    name: "suggestie"
}