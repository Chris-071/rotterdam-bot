const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.roles.cache.get('785596843391582269')) return message.reply("Alleen mensen met de Support Team role kunnen dit.");

    var channel = message.guild.channels.cache.find(c => c.name === "punten-logs");
    channel.send(`**${message.author}** Heeft een ticket geclaimd. (5 punten)`);
    
    var embed = new discord.MessageEmbed()
    .setDescription(`Ticket geclaimd door: ${message.author}.`)
    .setColor("BLUE");

    const catId = "785596306185912350";

    if (message.channel.parentID == catId) {
        message.channel.send(embed);
        message.channel.setTopic(`Status: Geclaimd! Door: ${message.author} (${message.author.id})`)
        message.delete();
    } else {
        message.reply("Dit kan je alleen in een ticket doen.").then(msg => msg.delete({ timeout: 3000 }));
        message.delete();
    }


}

module.exports.help = {
    name: "claim"
}
