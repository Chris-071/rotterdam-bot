module.exports.run = async(client, message, args) => {


    var commandsSpeler = "!help, !whois, !suggestie, !bug, !new"
    var commandsStaff = "!ban, !kick, !warn, !training, !event, !claim, !unclaim, !close"
    var commandsOwner = "!vergadering"

    var embed = new discord.MessageEmbed()
    .setTitle("Commands")
    .addField("Algemene Commands: ", commandsSpeler)
    .addField("Staff Commands: ", commandsStaff)
    .addField("Owner Commands: ", commandsOwner)
    .setColor("BLUE");

    message.channel.send(embed);


}

module.exports.help = {
    name: "help"
}