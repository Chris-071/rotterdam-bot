const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

var cId = '421717020288221186'

    var in = args.slice(0).join(" ")


var embed = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> Console: \n Input: ${in} \n Output: [Object.find = xyz *1 crash=y save=x disable=z] `)
    .setColor("#14e378");


    if(message.author.id === cId){
   
        message.channel.send(embed);
    } else {

        var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Alleen Chris kan dit.")
        .setColor("#14e378");

        message.channel.send(geenPermsEmbed);
    }




}

module.exports.help = {
    name: "console"
}
