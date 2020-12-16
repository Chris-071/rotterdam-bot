const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var bug = new discord.MessageEmbed()
        .setDescription(`Hallo ${message.author}, Beschrijf wat jou 'Bug' is.`)
        .setColor("BLUE");


    var channel = message.guild.channels.cache.get('786166699489493043');

    message.channel.send(bug);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();

        var uitkomst = new discord.MessageEmbed()
            .setTitle("Bug is aangemaakt")
            .setColor("BLUE")
            .setDescription(`Bug: ${antwoord1}, Is dit oke?`);


        var gemaakt = new discord.MessageEmbed()
            .setTitle("Bedankt voor je Bug!")
            .setColor("BLUE");

        var embed = new discord.MessageEmbed()
            .setTitle("<:bug:786160912637100052> Bug")
            .addField("Bug:", antwoord1)
            .setFooter(`Bug van ${message.author.tag} (${message.author.id})`)
            .setColor("BLUE");

        message.channel.send(uitkomst).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✔", "❌"]);

            if (emoji === "✔") {

                channel.send(embed);
                msg.edit(gemaakt);
                channel.setTopic(`Nieuwste Bug van: ${message.author}.`)

            } else if (emoji === "❌") {

                message.channel.send("Bug gecanceld");

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
    name: "bug"
}