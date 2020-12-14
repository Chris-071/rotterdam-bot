const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const catId = "";

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Alleen owners kunnen dit.");

    var embed1 = new discord.MessageEmbed()
    .setDescription("Wil je een vergadering starten/stoppen?")
    .setColor("BLUE");

    var embed2 = new discord.MessageEmbed()
    .setDescription("Vergadering gestart!")
    .setColor("BLUE");

    var embed3 = new discord.MessageEmbed()
    .setDescription("Vergadering gestopt!")
    .setColor("BLUE");

    var bool = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "Vergadering") {

            bool = true;

            message.channel.send(`Er is al een vergadering actief.`);

            return;

        }

    });



    if (bool) return;



}

module.exports.help = {
    name: "vergadering"
}
