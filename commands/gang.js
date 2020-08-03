const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setDescription("Van welke gang wil je lid worden?")
    .addField("The Crimenals", "Info: \n Owner: gevuldenkoek")


}

module.exports.help = {
    name: "gang"
}