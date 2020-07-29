const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryId = "713038227862454325"

    var userName = message.author.username

    var bool = false;

    var geefReden = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Geef een reden op zodat het support team jou sneller kan helpen.")
        .setColor("#14e378");


    var reden = args.slice(0).join(" ");
    if (!reden) return message.reply(geefReden);


    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "ticket" + "-" + userName.toLowerCase()) {
            bool = true;


            var maxTicketEmbed = new discord.MessageEmbed()
                .setDescription("<:fout:730747907480748082> Je hebt het maximaal aantal tickets bereikt. [1/1]")
                .setColor("#14e378");

            message.reply(maxTicketEmbed);

            return;
        }

    });

    if (bool) return;

    var aanmaak = new discord.MessageEmbed()
        .setDescription("<:Succesvol:730747906331770900> Je ticket word aangemaakt!")
        .setColor("#14e378");

    message.reply(aanmaak);


    message.guild.channels.create("ticket" + "-" + userName.toLowerCase(), { type: 'text' }).then(
        (createdTicket) => {
            createdTicket.setParent(categoryId).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.get('713374898269061151'), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES: true,
                        CREATE_INSTANT_INVITE: false,
                        ADD_REACTIONS: false
                    });

                    var inTicketEmbed = new discord.MessageEmbed()
                        .setTitle(`Welkom in je ticket ${message.author.username}.`)
                        .addField("Het support team helpt je zo snel mogelijk.", "Een moment geduld aub.")
                        .addField("Reden van ticket:", reden)
                        .setColor("#14e378");

                    settedParent.send(inTicketEmbed);


                }
            ).catch(err => {
                message.channel.send("Error..");
            });
        }
    ).catch(err => {
        message.channel.send("Error..");
    });



}

module.exports.help = {
    name: "ticket"
}