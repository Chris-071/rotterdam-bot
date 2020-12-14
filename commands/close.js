const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.get('785596843391582269')) return message.reply("Alleen mensen met de Support Team role kunnen dit.");

    const catId = "785596306185912350";

    var reden = args.slice(0).join(" ");

    var closeEmbed = new discord.MessageEmbed()
        .setDescription("Ticket Word gesloten over 3 seconden.")
        .setColor("BLUE");

    if (message.channel.parentID == catId) {
        message.channel.setTopic(`Status: Gesloten! Door: ${message.author} (${message.author.id})`)
        message.channel.bulkDelete(99);
        message.channel.send(closeEmbed)
            .then((msg) => {
                setTimeout(function () {
                    message.channel.delete();
                }, 3000)
            });

    } else {
        message.reply("Dit kan je alleen in een ticket doen.");
    }

    var logEmbed = new discord.MessageEmbed()
        .setTitle(`Ticket Gesloten.`)
        .addField("Gesloten door: ", message.author)
        .addField("Ticket:", message.channel.name)
        .addField("Reden: ", reden || "Niet opgegeven.")
        .setColor("BLUE");

    var logChannel = message.member.guild.channels.cache.find(channel => channel.name === "ticket-logs");

    logChannel.send(logEmbed);




}

module.exports.help = {
    name: "close"
}
