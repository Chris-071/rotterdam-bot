const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var cId = '421717020288221186'


    var ac = args.slice(0).join(" ")


var embed = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> activiteit veranderd! Nieuwe activiteit: ${ac}`)
    .setColor("#14e378");

message.channel.send(embed);

    if(message.author.id === cId){
        client.user.setActivity(ac , { type: "WATCHING" });
    } else {

        var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Alleen Chris kan dingen aan de bot veranderen.")
        .setColor("#14e378");

        message.channel.send(geenPermsEmbed);
    }

}

module.exports.help = {
    name: "setac"
}