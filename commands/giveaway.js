const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var geenPermsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> Jij hebt hier geen permissions voor.")
        .setColor("#14e378");

    var geenArgsEmbed = new discord.MessageEmbed()
        .setDescription("<:fout:730747907480748082> !giveaway [Aantal Winnaars] [Tijd] [Prijs]")
        .setColor("#14e378");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(geenPermsEmbed)

    var prijs = "";
    var tijd;
    var winnaars;

    winnaars = args[0]
    tijd = args[1]
    prijs = args.splice(2, args.length).join(" ")

    if (!winnaars) return message.channel.send(geenArgsEmbed)
    if (!tijd) return message.channel.send(geenArgsEmbed)
    if (!prijs) return message.channel.send(geenArgsEmbed)

    message.delete()

    var date = new Date().getTime();
    var dateEnd = new Date(date + (tijd * 1000))

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **Giveaway!** 🎉")
        .setDescription(`Reageer met '🎉' om mee te doen aan de giveaway.`)
        .setColor("#14e378") 
        .addField("Prijs:", prijs)
        .addField("Aantal Winnaars", winnaars)
        .addField("Hosted By", message.author)
        .setFooter(`Vervalt: ${dateEnd}`);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1)
                continue;
            }

        }

        var mensenTeWeinig = new discord.MessageEmbed()
        .setDescription(`<:error:730747906390229074> Er zijn te weinig mensen die meededen, Niemand heeft gewonnen.`)
        .setColor("#14e378");

        if(peopleReacted.length == 0) {
            return message.channel.send(mensenTeWeinig)
        
        }

        if(peopleReacted.length < winnaars) {
            return message.channel.send(mensenTeWeinig)
        }

        for (let y = 0; y < winnaars; y++) {
            
            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {
              
                if(winners[o] == peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }

            }

            if(!inList){
                winners.push(peopleReacted[random]);
            }

            
        }

        for (let y = 0; y < winners.length; y++) {
            
            message.channel.send("Gefeliciteerd " + winners[y].username + ` met de **${prijs}**!`)
            
        }

    

    }, tijd * 1000)



}

module.exports.help = {
    name: "giveaway"
}