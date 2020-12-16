const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    var welkomEmbed = new discord.MessageEmbed()
    .setTitle(`Welkom in Rotterdam!`)
    .setDescription(`
    @Game Creator | C ~ De maker van Rotterdam.
    @Co-Creator | OC ~ De mede-maker van Rotterdam.
    @Hoofd-Manager | OC ~ Gaat over de staff-Leden [Devs/HR's/HC's]
    @Manager | HC ~ Begeleid zijn/haar eenheid waarvan deze persoon staff is.
    @Proef-Manager | HC ~ Dit is een manager in opleiding. Dus de assistent van de Manager.
    @SuperAdministrator | HC ~ Dit is de mede begeleider van zijn/haar eenheid waarvan hij/zei staff is.
    @Proef-HC ~ Dit is een HC in opleiding.
    @Eenheid Directeur ~ Leidinggevende van een eenheid.
    @Administrator | HR ~ Deze personen hosten eventen & Trainingen.
    @Moderator | HR ~ Deze personen Hosten trainingen & Co-Hosten events.
    @Proef-HR ~ HR in opleiding.
    @Head-Developer ~ Begeleid de Developers en mag bepalen wie er developer word als je een sollicitatie heb gedaan.
    @Developer ~ Bouwer.
    @Proef-Developer ~ Developer in Opleiding.
    @OG ~ Deze role krijg je als je heel lang bij Rotterdam zit.
    
    @Burgemeester ~ Burgemeester van Rotterdam.
    @Gemeente stafff ~ Staff van de gemeente.
    
    Permanenten Invite Link 
    https://discord.gg/Thgw5YDgbs
    https://discord.gg/Thgw5YDgbs
    https://discord.gg/Thgw5YDgbs
    `)
    .setColor("BLUE")
    .setFooter(`©${message.guild.name} ~ 2020/2021`);


    var groepenEmbed = new discord.MessageEmbed()
    .setTitle(`Groepen Rotterdam!`)
    .setDescription(`
    [Gemeente](https://www.roblox.com/groups/8631926/Gemeente-Rotterdam#!/about)
    [Politie](https://www.roblox.com/groups/6417778/Politie-Rotterdam#!/about)
    [Brandweer](https://www.roblox.com/groups/6482734/Brandweer-Rotterdam-The-Netherlands#!/about)
    [Ambulance](https://www.roblox.com/groups/6417778/Politie-Rotterdam#!/about) **SOON**
    [Luchtmacht](https://www.roblox.com/groups/8589403/Defensie-Rotterdam#!/about)
    [Kmar](https://www.roblox.com/groups/7246894/Koninklijke-Marechaussee-Rotterdam-The-Netherland#!/about)
    `)
    .setColor("BLUE")
    .setFooter(`©${message.guild.name} ~ 2020/2021`);


    var regelsEmbed = new discord.MessageEmbed()
    .setTitle(`Regels Rotterdam!`)
    .setDescription(`
    📄 | REGELS VOOR DISCORD-SERVER:

    1.1 - Wees respectvol!
    U moet alle gebruikers respecteren, ongeacht uw voorkeur voor hen. Behandel anderen zoals u zelf behandeld zou willen worden.
    
    
    1.2 - Je respecteert een moderator of hoger!
    Als een moderator je aanspreekt, moet je ook luisteren, een moderator of hoger heeft het recht om je te waarschuwen / schoppen / verbannen! En als het van toepassing is, meld u dan.
    
    
    
    1.3 - Geen racistische of haatdragende taal!
    Je maakt geen racistische of narcistische opmerkingen tegen een ander.
    
    
    
    1.4 - Geen ongepast taalgebruik!
    Vloeken op de onenigheidsserver is echter ook verboden.
    
    
    
    1.5 - Geen spam!
    Stuur niet veel kleine berichtjes achter elkaar. Stoor de chat niet door te spammen.
    
    
    
    1.6 - Geen pornografisch / volwassen / ander NSFW-materiaal!
    Dit is een communityserver en niet bedoeld om dit soort materiaal te delen.
    
    
    
     1.7 - Geen reclame!
    We tolereren geen enkele vorm van advertenties, of het nu voor andere apparaten of streams is. U kunt uw inhoud in het mediakanaal plaatsen als deze relevant is en echte waarde biedt. (ook geen reclame in dm) ..
    
    
    
    1.8 - Geen aanstootgevende namen en profielfoto's!
    U wordt gevraagd uw naam of foto te wijzigen als een HR of hoger dit ongepast vindt.
    
    
    
    1.9 - Overval de server niet!
    Het vermelden van een overval is niet toegestaan.
    
    
    
    1.10 - Directe en indirecte bedreigingen!
    Bedreigingen voor andere gebruikers door DDoS, Death, DoX, misbruik en andere kwaadaardige bedreigingen zijn ten strengste verboden en verboden.
    
    
    
    1.11 - Volg de Discord Community-richtlijnen!
    Je kunt ze hier vinden: [Discord guidelines](https://discordapp.com/guidelines).`)
    .setColor("BLUE")
    .setFooter(`©${message.guild.name} ~ 2020/2021`);


    message.channel.send(welkomEmbed);
    message.channel.send(regelsEmbed);
    message.channel.send(groepenEmbed);


}

module.exports.help = {
    name: "info"
}
