const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.roles.cache.get('785488289267580988')) return message.reply("Alleen HC+ kan dit.");

    var logChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');
    if(!logChannel) return message.reply("Kan het kanaal #logs niet vinden.");

    var reden = args.slice(1).join(" ");

    


}

module.exports.help = {
    name: "ban"
}
