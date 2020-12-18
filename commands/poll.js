const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Alleen staff leden kunnen dit. Ben jij een staff lid maar werkt dit niet heb je niet de juiste permissions. (**MANAGE_MESSAGES**)`)

    var Poll = new discord.MessageEmbed()
        .setTitle("Prompt")
        .setDescription(`Hallo ${message.author}, Beschrijf hier wat jou poll is.`)
        .setColor("BLUE");


    var channel = message.guild.channels.cache.get('788713272965726218');

    message.channel.send(Poll);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();

        var uitkomst = new discord.MessageEmbed()
            .setTitle("Prompt")
            .setColor("BLUE")
            .setDescription(`Poll: ${antwoord1}, Is dit oke?`);


        var gemaakt = new discord.MessageEmbed()
            .setTitle("Prompt")
            .setDescription("Bedankt voor je Poll!")
            .setColor("BLUE");

        var embed = new discord.MessageEmbed()
            .setTitle("Poll")
            .addField("Poll:", antwoord1)
            .setFooter(`Poll van ${message.author.tag} (${message.author.id})`)
            .setColor("BLUE");

        message.channel.send(uitkomst).then(async msg => {

            var emoji = await promptMessage(msg, message.author, 30, ["✔", "❌"]);

            if (emoji === "✔") {

                channel.send(embed).then(embedR => {
                    embedR.React('👍');
                    embedR.React('👎');
                });
                msg.edit(gemaakt);
                channel.setTopic(`Nieuwste Poll van: ${message.author}.`)

            } else if (emoji === "❌") {

                message.channel.send("Poll gecanceld");

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
    name: "poll"
}