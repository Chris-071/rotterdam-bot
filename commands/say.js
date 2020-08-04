const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
  //  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Alleen staff leden kunnen dit.")

    var bericht = args.slice(0).join(" ");
    message.delete();
    message.channel.send(bericht)

}

module.exports.help = {
    name: "say"
}
