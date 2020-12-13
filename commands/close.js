const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.roles.cache.get('785596843391582269')) return message.reply("Alleen mensen met de Support Team role kunnen dit.");

    const catId = "785596306185912350";

    if (message.channel.parentID == catId) {
        message.channel.delete();
    } else {
        message.reply("Dit kan je alleen in een ticket doen.");
    }

    var logEmbed = new discord.MessageEmbed()
    .setTitle(`Ticket Gesloten.`)
    .addField("Gesloten door: ", message.author)
    .addField("Ticket:", message.channel.name)
    .setColor("BLUE");

    var logChannel =  message.member.guild.channels.cache.find(channel => channel.name === "ticket-logs");

    logChannel.send(logEmbed);




}

module.exports.help = {
    name: "close"
}
