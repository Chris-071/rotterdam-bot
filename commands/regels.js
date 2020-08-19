const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Regels Rotterdam // 2020")
    .addField("**Algemene Regels**", "Niet schelden. \n Geen reclame maken. \n Geen NSFW content. \n Houd het netjes. \n Niet (tag)spammen.")
    .addField("**Voice Kanaal Regels**", "Niet schelden \n Geen reclame maken. \n Geen 18 plus geluiden.")
    .addField("**Ticket Regels**", "Doe respectvol tegen het staff-team. \n Hou het netjes. \n Bewijs sturen van Abuse is verplicht. \n Heb geduld totdat je word geholpen.")
    .addField("**Ingame Regels**", "Geen FRP \n Geen RDM \n Niet Glitchen \n Niet schelden \n Geen trainingen verstoren.")
    .setColor("#14e378")
    .setFooter("©️Rotterdam, The Netherlands");


    message.channel.send(embed);



}

module.exports.help = {
    name: "regels"
}

