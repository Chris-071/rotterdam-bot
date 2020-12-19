const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Alleen HC+ kan dit.");

    var logChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');
    if (!logChannel) return message.reply("Kan het kanaal #logs niet vinden.");

    if (!args[0]) return message.reply("Geef een gebruiker op.");

    if (!args[1]) return message.reply("Geef een reden op.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])) || message.author.id;
    if (!user) return message.reply("Geef een gebruiker op.");

    var reden = args.slice(1).join(" ");
    if (!reden) return message.reply("Geef een reden op.");


    var logEmbed = new discord.MessageEmbed()
        .setTitle("Ban")
        .setColor("BLUE")
        .addField("Gebruiker:", user)
        .addField("Moderator:", message.author)
        .addField("Reden:", reden);

    var banEmbed = new discord.MessageEmbed()
        .setDescription(`Succesvol ${user} verbannen van de server.`)
        .setColor("BLUE");

    var banEmbedDM = new discord.MessageEmbed()
        .setDescription(`Je bent verbannen voor Rotterdam. Reden: ${reden}`)
        .setColor("BLUE");

    user.kick(reden).catch(err => {
        if (err) return console.log(err);
    });

    logChannel.send(logEmbed);
    message.channel.send(banEmbed);

    message.delete();



}

module.exports.help = {
    name: "ban"
}
