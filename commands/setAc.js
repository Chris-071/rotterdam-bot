const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var cId = '421717020288221186'


    var ac = args.slice(0).join(" ")


    if(message.author.id === cId){
        client.user.setActivity(ac , { type: "WATCHING" });
    } else {
        message.channel.send("Alleen Chris kan dit.");
    }




}

module.exports.help = {
    name: ""
}