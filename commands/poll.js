const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var poll = args.slice(0).join(" ");

    var embed = new discord.MessageEmbed()
    .setDescription(`📊Poll - ${poll}`)
    .setColor("#14e378");

     var kanaal = message.guild.channels.cache.get("739234706142527559");
    kanaal.send(embed).then(
        (embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');
        })
    );

    var embedLog = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> Poll aangemaakt! Poll: ** ${poll} **`)
    .setColor("#14e378");

    message.channel.send(embedLog);

  

}

module.exports.help = {
    name: "poll"
}