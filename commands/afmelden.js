const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const filter = m => m.author.id === message.author.id;
    var vanafEmbed = new discord.MessageEmbed()
        .setColor("#14e378")
        .setDescription(`Hallo ${message.author}, Vanaf wanneer wil je jezelf afmelden? Typ 'cancel' om te annuleren.`);

    message.channel.send(vanafEmbed);
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 1000
    }).then(collected => {

        if (collected.first().content === "cancel") {
            return message.channel.send("Geannuleerd!")
        }

        var vanaf = collected.first().content

    })

    var totEmbed = new discord.MessageEmbed()
    .setColor("#14e378")
    .setDescription(`Oke, Tot wanneer wil je jezelf afmelden? Typ 'cancel' om te annuleren.`);

message.channel.send(totEmbed);
message.channel.awaitMessages(filter, {
    max: 1,
    time: 1000
}).then(collected => {

    if (collected.first().content === "cancel") {
        return message.channel.send("Geannuleerd!")
    }

    var tot = collected.first().content

})

var redenEmbed = new discord.MessageEmbed()
.setColor("#14e378")
.setDescription(`Oke, Tot wanneer wil je jezelf afmelden? Typ 'cancel' om te annuleren.`);

message.channel.send(redenEmbed);
message.channel.awaitMessages(filter, {
max: 1,
time: 1000
}).then(collected => {

if (collected.first().content === "cancel") {
    return message.channel.send("Geannuleerd!")
}

var reden = collected.first().content

})



    var embed = new discord.MessageEmbed()
    .setTitle("Afmelding")
    .setColor("#14e378")
    .addField("Gebruiker:", message.author)
    .addField("Vanaf", vanaf)
    .addField("Tot", tot)
    .addField("Reden", reden)


}

module.exports.help = {
    name: "afmelden"
}