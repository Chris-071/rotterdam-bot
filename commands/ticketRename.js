const discord = require("discord.js");
const { markChatAsSeen } = require("noblox.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.get('785596843391582269')) return message.reply("Alleen mensen met de Support Team role kunnen dit.");

    var naam = args[0]

    var embed = new discord.MessageEmbed()
        .setDescription(`Naam van ticket veranderd naar ${naam}!`)
        .setColor("BLUE");

    const catId = "785596306185912350";

    if (message.channel.parentID == catId) {
        message.channel.send(embed);
        message.channel.name = naam
        message.delete();
    } else {
        message.reply("Dit kan je alleen in een ticket doen.").then(msg => msg.delete({ timeout: 3000 }));
        message.delete();
    }


}

module.exports.help = {
    name: "rename"
}
