const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    try {

        var gebruiker = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]))
        if (!gebruiker) gebruiker = message.member;
    
        var roles = gebruiker.roles.cache.size - 1;
        var roleNames = gebruiker.roles.cache.map(r => r).join(" ").replace("@everyone", "");
        if (roles == 0) roleNames = `Deze gebruiker heeft geen rollen.`;
    
        var status = gebruiker.presence.status;
        if (status == 'dnd') status = "<:dnd:786160912008347698> Niet Storen"
        if (status == 'idle') status = "<:idle:786160915405209620> Inactief"
        if (status == 'online') status = " <:online:786160912037969930> Online"
        if (status == 'offline') status = "<:offline:786160912704077834> Offline"    
    
        var nickname = gebruiker.nickname;
        if (nickname == null || undefined) nickname = `Deze gebruiker heeft geen Nickname.`

        var badge = "Geen Badges."
        if(gebruiker.roles.cache.get("785488289762246676")) badge = "<:Owner:786162063494873108>"
        if(gebruiker.roles.cache.get("785596843391582269")) badge = "<:StaffPic:786162063449653258>"
    
        var userInfo = new discord.MessageEmbed()
            .setTitle(`Userinfo van ${gebruiker.user.tag}`)
            .setColor("#14e378")
            .setThumbnail(gebruiker.user.displayAvatarURL())
            .addField("ID:", `${gebruiker.id}`)
            .addField("Tag", gebruiker.user.discriminator)
            .addField("Nickname:", nickname)
            .addField("status:", `${status}`)
            .addField("Activiteit:", `${gebruiker.presence.activities[0] ? gebruiker.presence.activities[0].name : "Deze gebruiker speelt op dit moment niks."}`)
            .addField("Badge:", badge)
            .addField(`Roles {${roles}}`, roleNames);
    
        message.channel.send(userInfo);
    
    } catch (err) {
        if (err) console.log(err);
    }

}

module.exports.help = {
    name: "whois"
}
