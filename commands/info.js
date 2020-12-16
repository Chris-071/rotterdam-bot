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
    `)
    .addField("[Invite link](https://discord.gg/Thgw5YDgbs) (Permanent)", "https://discord.gg/Thgw5YDgbs")
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
    .addField(" 1.1 - Wees respectvol!"," U moet alle gebruikers respecteren, ongeacht uw voorkeur voor hen. Behandel anderen zoals u zelf behandeld zou willen worden.")
    .addField(" 1.2 - Je respecteert een moderator of hoger!","    Als een moderator je aanspreekt, moet je ook luisteren, een moderator of hoger heeft het recht om je te waarschuwen / schoppen / verbannen! En als het van toepassing is, meld u dan.    ")
    .addField("1.3 - Geen racistische of haatdragende taal!","Je maakt geen racistische of narcistische opmerkingen tegen een ander.")
    .addField(" 1.4 - Geen ongepast taalgebruik! 1.4 - Geen ongepast taalgebruik!"," Vloeken op de onenigheidsserver is echter ook verboden.")
    .addField(" 1.5 - Geen spam!","Stuur niet veel kleine berichtjes achter elkaar. Stoor de chat niet door te spammen.")
    .addField("    1.6 - Geen pornografisch / volwassen / ander NSFW-materiaal!","Dit is een communityserver en niet bedoeld om dit soort materiaal te delen.")
    .addField(" 1.7 - Geen reclame!","We tolereren geen enkele vorm van advertenties, of het nu voor andere apparaten of streams is. U kunt uw inhoud in het mediakanaal plaatsen als deze relevant is en echte waarde biedt. (ook geen reclame in dm)")
    .addField("1.8 - Geen aanstootgevende namen en profielfoto's!","U wordt gevraagd uw naam of foto te wijzigen als een HR of hoger dit ongepast vindt.")
    .addField("1.9 - Raid de server niet!"," Het vermelden van een Raid is niet toegestaan.")
    .addField("1.10 - Directe en indirecte bedreigingen!","Bedreigingen voor andere gebruikers door DDoS, Death, DoX, misbruik en andere kwaadaardige bedreigingen zijn ten strengste verboden en verboden.")
    .addField("1.11 - Volg de Discord Community-richtlijnen!","Je kunt ze hier vinden: [Discord guidelines](https://discordapp.com/guidelines).")
    .setColor("BLUE")
    .setFooter(`©${message.guild.name} ~ 2020/2021`);


    var staffInfoEmbed = new discord.MessageEmbed()
    .setTitle(`Staff Informatie Rotterdam!`)
    .addField("Warnen in game", "Je kan warnen bij 1 van de onderstaande redenen. \n\n -18+ Taalgebruik \nAbuse \nRDM \nFRP \nSchelden met (Heftige) ziektes \nLeaven/Switch Team uit jail. \nOngepast Taalgebruik.")
    .addField("Schorsen","Wanneer een speler zich heftig misdraagt bij een eenheid kan je aanvragen bij een HC om die te schorsen.")
    .addField("Bannen","Bij de 5 warnings in totaal krijgt iemand een sban (Serverban), dat is een ban voor één dag. Een permanente ban krijg je bij warning 30. Dit kan alleen een superadministrator doen.  ")
    .addField("Handelen in #algemeen","Wanneer iemand zich misdraagt in algemeen ga je hier niet op in of de discussie opzoeken. Je gaat als het nodig is aanspreken in zijn dm of warnen in de staff bot channel.")
    .addField("Warnen/bannen in discord server. ","Wanneer iemand zich misdraagt in de server kan je hem warnen of bannen in het staff bot channel kanaal.")
    .addField("Tickets","Één HR/HC behandelt de ticket, je komt hier dan anders ook niet in! HC+ kan iemand taggen of mengen als iemand lang niet reageerd of het gaat om een HR klacht. \n\n HR klacht -> Tagg een HC en ga uit de ticket. \nHC klacht -> Tagg een OC+. \nVraag/klacht -> Behandel hem zelf. \nAdvertentie -> Tagg een manager+.")
    .addField("Exploiter","Als er een exploiter is maak je bewijs en stuur je het in #deleted-channel, je geeft hem geen aandacht! Dus niet jailen ect.")
    .addField("Ontslag","Als je er over nadenkt om ontslag te nemen kan je altijd het beste eerst met een HC of hoger in gesprek gaan, zodat jullie samen tot een oplossing kunnen komen.")
    .addField("Admin Abuse","Admin Abuse is het misbruiken van je commands. De volgende commands mag je alleen in game gebruiken! \n\n :watch (Checken voor een exploiter of FRP) \n:fly (Iemand jailen of voor een training) \n:noclip/:clip (Tijdens een training of jail) \n:re (Tijdens een training of als het noodzakelijk is) \n:spawn (Tijdens een training, melding of iemand voor overlast zorgt) \n:kick (Tijdens een training of als iemand voor overlast zorgt) \n:tp (Tijdens een training of als het noodzakelijk is) ")
    .setColor("BLUE")
    .setFooter(`©${message.guild.name} ~ 2020/2021`);


    message.channel.send(welkomEmbed);
    message.channel.send(regelsEmbed);
    message.channel.send(groepenEmbed);
    message.channel.send(staffInfoEmbed);





}

module.exports.help = {
    name: "info"
}
