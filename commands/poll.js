const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var poll = args.slice(1).join(" ");

    var embed = new discord.MessageEmbed()
    .setDescription(`📊Poll - ${poll}`)
    .setColor("#14e378")

     var kanaal = message.guild.channels.cache.get("739234706142527559");
    kanaal.send(embed);

}

module.exports.help = {
    name: "poll"
}