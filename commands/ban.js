const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Je hebt niet de juiste permissions voor dit.");

    var logChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');
    if(!logChannel) return message.reply("Kan het kanaal #logs niet vinden.");

    var reden = args.slice(1).join(" ");

    


}

module.exports.help = {
    name: "ban"
}
