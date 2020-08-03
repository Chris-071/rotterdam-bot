const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var poll = args.slice(0).join(" ");

    var embed = new discord.MessageEmbed()
    .setDescription(`📊Poll - ${poll}`)
    .setColor("#14e378");

     var kanaal = message.guild.channels.cache.get("739234706142527559");
    kanaal.send(embed);

    message.channel.send("Poll gemaakt!" + poll);

}

module.exports.help = {
    name: "poll"
}