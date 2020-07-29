const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryId = "713038227862454325"

    var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Je hebt geen permissions om deze ticket te closen.")
        .setColor("#14e378");

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(geenPermsEmbed)

    if(message.channel.parentID == categoryId){
        message.channel.delete()
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