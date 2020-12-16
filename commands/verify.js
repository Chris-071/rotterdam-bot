const discord = require("discord.js");
const rbx = require("noblox.js")

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("Awaiting Prompt")


    function makeid() {
        var text = "";
        var textVerify = ['🍐', '🍎', '😅', '😎', '😂',];
        text += textVerify[Math.floor(Math.random() * textVerify.length)];
        text += textVerify[Math.floor(Math.random() * textVerify.length)];
        text += textVerify[Math.floor(Math.random() * textVerify.length)];
        text += textVerify[Math.floor(Math.random() * textVerify.length)];
        return text;
    }

    const filter = m => m.author.id === message.author.id
    const collector = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" })
    const robloxEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Prompt")
        .setDescription(`Hallo ${message.author}, Wat is jou roblox username?`)
        .setFooter("Deze prompt word gestopt over 200 seconden.")
        .setTimestamp()
    msg.channel.send(robloxEmbed)

    collector.on("collect", m => {
        if (m.content === 'cancel' || m.content === 'Cancel') {
            message.channel.send('**Prompt gestopt.**')
            return
        }
        rbx.getIdFromUsername(m.content).then(foundId => {
            const Id = foundId
            const newString = makeid() + makeid() + makeid() + makeid() + makeid()
            const foundUsername = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("Prompt")
                .setDescription("Hallo **" + m.content + "**, Om jezelf te kunnen verifiëren moet je deze tekst in je [beschrijving](https://www.roblox.com/my/account#!/info) zetten. \n `" + newString + "`\n\nZeg **done** Als je klaar bent.\nZeg **cancel** om te stoppen. ")
                .setFooter("Speler ID is " + foundId)
                .setTimestamp()
            msg.channel.send(foundUsername)
            const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" })
            collector2.on('collect', async mag => {
                if (mag.content.includes('done') & mag.content.includes("done") && mag.author.id == message.author.id) {
                    const fetchingBlurb = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setTitle("Prompt")
                        .setDescription("Moment, Ik ben aan het controleren of het goed is.")
                        .setFooter("Zoeken naar beschrijving..")
                        .setTimestamp()
                    msg.channel.send(fetchingBlurb)
                    setTimeout(function () {
                        rbx.getStatus(foundId).then(status => {
                            console.log(status)
                            rbx.getBlurb(foundId).then(blurb => {
                                if (status.includes(newString) || blurb.includes(newString)) {
                                    const verified = new Discord.MessageEmbed()
                                        .setColor("GREEN")
                                        .setTitle("Prompt")
                                        .setDescription("Je bent geverifieerd! Ik geef je de rollen en pas je naam aan. Moment geduld a.u.b.")
                                        .setFooter("Verifying..")
                                        .setTimestamp()
                                    msg.channel.send(verified)
                                    message.member.roles.add(message.guild.roles.find(r => r.name == "Geverifieerde Speler"))
                                    message.member.setNickname(m.content)



                                } else {
                                    message.channel.send("Ik kan de tekst niet vinden in je beschrijving..")
                                }
                            })
                        }, 5000)
                    })
                } else
                    if (mag.content.includes('cancel') && mag.author.id == message.author.id) {
                        message.channel.send('**Prompt gestopt.**')
                        return
                    }
            })
        })
    })
};


module.exports.help = {
    name: "verify"
}
