const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> Welke rol wil je? <giveaway/poll/mededeling>`)
    .setColor("#14e378");

    message.reply(embed);


    var gP = message.guild.roles.cache.get('739869962042212382');
    var pP = message.guild.roles.cache.get('739869963913003198');
    var mP = message.guild.roles.cache.get('739869966232322058');

    message.channel.awaitMessages(m => m.author.id == message.author.id,
        { max: 1, time: 30000 }).then(collected => {

            if (collected.first().content.toLowerCase() == 'giveaway') {
               message.member.roles.add(gP);
            } else if (collected.first().content.toLowerCase() == 'poll') {
               message.member.roles.add(pP);
            } else if (collected.first().content.toLowerCase() == 'mededeling') {
               message.member.roles.add(mP);
            }
            

        }).catch(err => {
            message.reply("Error")
        });




}

module.exports.help = {
    name: "toggle-add"
}