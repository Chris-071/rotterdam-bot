const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var bericht = args.slice(0).join(" ");
    message.delete();

    var embed = new discord.MessageEmbed()
    .setColor("#14e378")
    .setDescription(bericht);

    message.channel.send(embed);


}

module.exports.help = {
    name: "embed"
}