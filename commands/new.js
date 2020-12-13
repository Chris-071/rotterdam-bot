const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    const catId = "785596306185912350";

    var reden = args.slice(0).join(" ");

    var ticketMaker = message.author;

    var nickname = ticketMaker.nickname;
    if (nickname == null || undefined) nickname = message.author.username

    var bool = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "Ticket" + "-" + nickname.toLowerCase()) {

            bool = true;

            message.channel.send(`Op dit moment heb je al een ticket open staan.`);

            return;

        }

    });

    if (bool) return;

    message.guild.channels.create("Ticket" + "-" + nickname.toLowerCase(), { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(catId).then(
                (settedParent) => {

                    var maak1 = new discord.MessageEmbed()
                        .setDescription(`<:aanmaken:786160912943677440> Je ticket word aangemaakt.`)
                        .setColor("BLUE");

                    var maak2 = new discord.MessageEmbed()
                        .setDescription(`<:succesvol:786160912192634895> Je ticket is succesvol aangemaakt. [ <#${settedParent.id}> ]`)
                        .setColor("BLUE");

                    message.channel.send(maak1)
                        .then((msg) => {
                            setTimeout(function () {
                                msg.edit(maak2);
                            }, 500)
                        });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.get("785596843391582269"), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true
                    });

                    var embedTicket = new discord.MessageEmbed()
                        .setTitle(`Ticket ${message.author.username}`)
                        .setColor("BLUE")
                        .setDescription(`Hallo ${message.author.username}, Je word zo snel mogelijk geholpen door het Support Team.`)
                        .addField("Reden van ticket: ", reden || "Niet opgegeven.");

                        settedParent.send(`<@785596843391582269> <@${message.author.id}>`).then(settedParent.send(embedTicket));
                }
            ).catch(err => {
                print("Er is een error bij het ticket systeem.")
            })
        }
    ).catch(err => {
        print("Er is een error bij het ticket systeem.")
    })



}

module.exports.help = {
    name: "new"
}
