const Discord = require("discord.js")
const rbx = require("noblox.js")

exports.run = async (Client, message, args) => {



    let msg = await message.channel.send("Verificatie gestart.") 


    function makeid() {
        var text = "Lol Crazy Apple Banaan Oof Verify Copy Nice";
        return text;
    }

    const filter = m => m.author.id === message.author.id
    const collector = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" }) 
    const robloxEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Verificatie")
        .setDescription("Wat is jou ROBLOX username?")
        .setFooter("De promt word beëindigd over 200 seconden.")
        .setTimestamp()
    msg.channel.send(robloxEmbed) 

    collector.on("collect", m => {
        if (m.content === 'cancel' || m.content === 'Cancel') {
            message.channel.send('**Verificatie beëindigd.**')
            return
        } 
        rbx.getIdFromUsername(m.content).then(foundId => { 
            const Id = foundId
            const newString = makeid() 
            const foundUsername = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("Verificatie")
                .setDescription("Hallo **" + m.content + "**, Om jezelf te kunnen verifiëren moet je de volgende zin in je roblox beschrijving zetten. (Klik [hier](https://roblox.com/my/account#!/info) om naar je ROBLOX Profiel te gaan) \n `" + newString + "`\nZeg **done** Als je klaar bent. \nZeg **cancel** Om te annuleren ")
                .setFooter("Speler ID is " + foundId)
                .setTimestamp()
            msg.channel.send(foundUsername) 
            const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" }) 
            collector2.on('collect', async mag => {
                if (mag.content.includes('done') & mag.content.includes("done") && mag.author.id == message.author.id) {
                    const fetchingBlurb = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setTitle("Verificatie")
                        .setDescription("Ik ben het aan het controleren. 1 moment.")
                        .setFooter("Controleren..")
                        .setTimestamp()
                    msg.channel.send(fetchingBlurb).then(message.author.send())
                    setTimeout(function () { 
                        rbx.getStatus(foundId).then(status => { 
                            console.log(status) 
                            rbx.getBlurb(foundId).then(blurb => { 
                                if (status.includes(newString) || blurb.includes(newString)) { 
                                    const verified = new Discord.MessageEmbed()
                                        .setColor("GREEN")
                                        .setTitle("Verificatie")
                                        .setDescription("Je bent succesvol geverifieerd! Ik geef je de rollen.")
                                        .setFooter("Verifiëren..")
                                        .setTimestamp()
                                    msg.channel.send(verified);

                                    var lidRole = message.guild.roles.cache.get('737332762016481291'); 
                                    

                                    message.member.roles.add(lidRole);
                                    message.member.setNickname(m.content);
                                   



                                } else {
                                    message.channel.send("Ik kan de text niet vinden in jouw beschrijving.") 
                                }
                            })
                        }, 5000)
                    })
                } else
                    if (mag.content.includes('cancel') && mag.author.id == message.author.id) {
                        message.channel.send('**Verificatie beëindigd**') 
                        return
                    }
            })
        })
    })
};


module.exports.help = {
    name: "verify"
}