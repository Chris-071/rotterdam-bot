const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Je hebt geen permissions om deze ticket te claimen.")
        .setColor("#14e378");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(geenPermsEmbed)

    var claimEmed = new discord.MessageEmbed()
        .setDescription(`<:Succesvol:730747906331770900> Ticket geclaimd! ~ Ticket succesvol geclaimd door **${message.author}** `)
        .setColor("#14e378");

    message.channel.send(claimEmed);



}

module.exports.help = {
    name: "claim"
}