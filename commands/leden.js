const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Aantal Leden")
    .setColor("#14e378")
    .addField("Leden:", message.guild.memberCount);

    message.channel.send(embed);


}

module.exports.help = {
    name: "leden"
}