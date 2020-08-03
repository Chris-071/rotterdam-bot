const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return("Alleen staff-leden kunnen dit.");

    if(!args[1]) return message.reply("Geef een Gebruiker op.");
    if(!args[2]) return message.reply("Geef een Reden op.");

    var user = message.mentions.users.first() || message.guild.members.get(args[1]);    
    if(!user) return message.reply("Geef een Gebruiker op.");

    var reden = args.slice(2).join(" ");
    if(!reden) return message.reply("Geef een Reden op.");

    var mainEmbed = new discord.MessageEmbed()
    .setTitle("Kick")
    .setColor("#14e378")
    .addField("Moderator:", message.author)
    .addField("Gebruiker:", user)
    .addField("Reden:", reden)
    .addField("Tijd:", message.createdAt)

    var kanaal = message.guild.channels.cache.get("733252337556127744");
    kanaal.send(mainEmbed);

    var embed2 = new discord.MessageEmbed()
    .setColor("#14e378")
    .setDescription(`<:Succesvol:730747906331770900> ${user} succesvol geband voor **${reden}**`);

    message.channel.send(embed2);

    user.ban(reden).catch(err => {
        if(err) console.log(err);
    });
   
    

}

module.exports.help = {
    name: "ban"
}
