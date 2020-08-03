const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setDescription("Wil je lid worden van:")
    .addField("The Criminals", "Info: \n Owner: gevuldenkoek")
    .setColor("#14e378");

    var role = message.guild.roles.cache.get('739885903173910568');

    message.channel.awaitMessages(m => m.author.id == message.author.id,
        { max: 1, time: 30000 }).then(collected => {

            if (collected.first().content.toLowerCase() == 'ja') {
                message.member.roles.add(role);

                var jaEmbed = new discord.MessageEmbed()
                .setDescription("Je bent lid van de gang!")
                .setColor("#14e378");
                message.channel.send(jaEmbed);
            } else if (collected.first().content.toLowerCase() == 'nee') {
                var neeEmbed = new discord.MessageEmbed()
                .setDescription("Je bent geen lid van de gang.")
                .setColor("#14e378");
                message.channel.send(neeEmbed)
            }
            

        }).catch(err => {
            message.reply("Error")
        });


}

module.exports.help = {
    name: "gang"
}