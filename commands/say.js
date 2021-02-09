const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

var msg = args.slice(0).join(" ");

if (message.member.hasPermission("ADMINISTRATOR")) return;

message.delete()
message.channel.send(msg);

}

module.exports.help = {
    name: "say"
}