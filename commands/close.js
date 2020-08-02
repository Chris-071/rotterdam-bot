const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryId = "713038227862454325"

    var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Je hebt geen permissions om deze ticket te closen.")
        .setColor("#14e378");

    if (!message.member.hasPermissions("MANAGE_MEMBERS")) return message.reply(geenPermsEmbed)

    var geefReden = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Geef een reden op.")
        .setColor("#14e378");

    var reden = args.slice(0).join(" ");
    if (!reden) return message.reply(geefReden);

    if (message.channel.parentID == categoryId) {
        message.channel.delete()

        var ticketGeslotenLog = new discord.MessageEmbed()
            .addField("Ticket:", message.channel.name)
            .addField("Moderator", message.author)
            .addField("Reden:", reden)
            .addField("Gesloten op:", message.createdAt)
            .setColor("#14e378");

        var kanaal = message.guild.channels.cache.get("726523744733888653");
        kanaal.send(ticketGeslotenLog);

    } else {
        var geenTicket = new discord.MessageEmbed()
            .setDescription("<:fout:730747907480748082> Je kunt alleen tickets sluiten.")
            .setColor("#14e378");
        message.reply(geenTicket);
    }



}

module.exports.help = {
    name: "close"
}