const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

var embed = new discord.MessageEmbed()
       .setDescription("<:fout:730747907480748082> Deze command is op dit moment in onderhoud, Probeer het later opnieuw.")
        .setColor("#14e378");


message.channel.send(embed)

}

module.exports.help = {
    name: "ban"
}
