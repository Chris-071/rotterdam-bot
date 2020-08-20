const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Info" + client.user.username)
    .setDescription("Badges: \n <:dev:746127138050015362> - Bot Developer \n <:staff:746127138054471781> - Bot Support/Staff \n <:verifyed:746126936954241084> - Verifyed server \n <:partner:746130743830249494> - Bot Partner \n <:BugHunter:746130743599824916> - Bug Hunter \n <:gamedev:746130743389847660> - Verifyed game dev")
    .setColor("#14e378")
    .addField("<:dev:746127138050015362> - Bot Developers", "gevuldenkoek")
    .addField("<:staff:746127138054471781> - Bot Staff", "N/A")
    .addField("<:verifyed:746126936954241084> - Verifyed Server", "-Rotterdam | The Netherlands V1 \n -Bot Test ")
    .addField("<:partner:746130743830249494> - Partners", "ItzDino_FOG")
    .addField("<:BugHunter:746130743599824916> - Bug Hunters", "N/A")
    .addField("<:gamedev:746130743389847660> - Verifyed games", "-Rotterdam, The Netherlands");

    message.channel.send(embed);


}

module.exports.help = {
    name: "botinfo"
}
