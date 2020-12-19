const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`Leden: ${message.guild.memberCount}/200`);
    
    message.channel.send(embed);

}

module.exports.help = {
    name: "leden"
}