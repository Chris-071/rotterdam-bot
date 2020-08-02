const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Regels Rotterdam // 2020")
    .addField("**Algemene Regels**", "Niet schelden. \n Geen reclame maken. \n Geen NSFW content. \n Houd het netjes. \n Niet (tag)spammen.")
    .addField("**Voice Kanaal Regels**", "Niet schelden \n ")
    .addField("**Ticket Regels**", "")
    .addField("**Ingame Regels**", "")
    .setColor("#14e378")
    .setFooter("©️Rotterdam, The Netherlands");



}

module.exports.help = {
    name: "regels"
}

