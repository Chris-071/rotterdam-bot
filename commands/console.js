const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

var cId = '421717020288221186'

Var out = [“Object.Cache.get = >* amount, For i&*”, “Object.find.get(‘xyz * 1000’)”]

Var outText = Math.floor(Math.random(out));

    var in = args.slice(0).join(" ")


var embed = new discord.MessageEmbed()
    .setDescription(`<:Succesvol:730747906331770900> Console: \n Input: {in} \n Output: {outText}`)
    .setColor("#14e378");


    if(message.author.id === cId){
        client.user.setActivity(ac , { type: "WATCHING" });
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
