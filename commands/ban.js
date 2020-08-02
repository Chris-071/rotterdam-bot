const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Geen perms");

    var gebruiker = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    var reden = args.slice(2).join(" ");

    if (!gebruiker) return message.channel.send("Geen Geruiker");
    if (!reden) return message.channel.send("Geen reden");

    var banEmbed = new discord.MessageEmbed()
        .setDescription(`✅ ${message.author} ik heb ${gebruiker} succesvol geband.`)
        .setColor("#31d697");


    gebruiker.ban(reden).catch(err => {
        var errorEmbed = new discord.MessageEmbed()
            .setDescription(`⛔ ${message.author} Error, Probeer het later opnieuw.`)
            .setColor("#31d697");

        if (err) return message.channel.send(errorEmbed)

    }).then(message.channel.send(banEmbed));

}

module.exports.help = {
    name: "ban"
}
