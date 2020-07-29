const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var prefix = "!"
    var spelerCmds = "help, ticket, idee, bug"
    var modCmds = "warn, kick, ban, mute, claim, close"
    var ownerCmds = "soon"
    var botOwnerCmds = "setName, setAc"

    var embed = new discord.MessageEmbed()
    .setTitle("Commands")
    .setDescription(`Prefix: ${prefix}`)
    .addField("Algemene Commands", spelerCmds)
    .addField("Moderator Commands", modCmds)
    .addField("Owner Commands", ownerCmds)
    .addField("Bot Owner Commands", botOwnerCmds)
    .setColor("#14e378");

    message.channel.send(embed);

}

module.exports.help = {
    name: "help"
}