const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var roleSelected = "Geen."

    var sneakPeak = message.guild.roles.cache.get("788345402336346133");
    var mededeling = message.guild.roles.cache.get("785792922297434123");
    var update = message.guild.roles.cache.get("788345403800027137");
    var training = message.guild.roles.cache.get("788345406878384160");
    var event = message.guild.roles.cache.get("788345404273459251");
    var giveaway = message.guild.roles.cache.get("788345415543422976");


}

module.exports.help = {
    name: "toggle"
}