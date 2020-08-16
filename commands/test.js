const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

var embed = new discord.MessageEmbed()
       .setDescription("")
        .setColor("#14e378");


message.channel.send(embed)

}

module.exports.help = {
    name: "test"
}
