const discord = require("discord.js");

module.exports.run = async(client, message, args) => {


    var cId = '421717020288221186'




var embed = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> Bot word uitgezet!`)
    .setColor("#14e378");


    if(message.author.id === cId){
        message.channel.send(embed);
    } else {

        var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Alleen Chris kan dingen aan de bot veranderen.")
        .setColor("#14e378");

        message.channel.send(geenPermsEmbed);
    }


}

module.exports.help = {
    name: "offline"
}
