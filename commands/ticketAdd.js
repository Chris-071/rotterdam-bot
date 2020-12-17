const discord = require("discord.js");
const { markChatAsSeen } = require("noblox.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.get('785596843391582269')) return message.reply("Alleen mensen met de Support Team role kunnen dit.");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!addUser) return message.reply("Geef een gebruiker op.");

    var embed = new discord.MessageEmbed()
        .setDescription(`Succesvol ${addUser} toegevoegd aan ${message.channel.name}!`)
        .setColor("BLUE");

    const catId = "785596306185912350";

    if (message.channel.parentID == catId) {
        message.channel.send(embed);

        message.channel.updateOverWrite(addUser, {
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            VIEW_CHANNEL: true
        });

        message.delete();
    } else {
        message.reply("Dit kan je alleen in een ticket doen.").then(msg => msg.delete({ timeout: 3000 }));
        message.delete();
    }


}

module.exports.help = {
    name: "add"
}
