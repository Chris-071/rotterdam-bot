const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var roleSelected = args[0]

    var sneakPeak = message.guild.roles.cache.get("788345402336346133");
    var mededeling = message.guild.roles.cache.get("785792922297434123");
    var update = message.guild.roles.cache.get("788345403800027137");
    var training = message.guild.roles.cache.get("788345406878384160");
    var event = message.guild.roles.cache.get("788345404273459251");
    var giveaway = message.guild.roles.cache.get("788345415543422976");

    var roles = ['Sneak-peak','Mededeling','Update','Training','Event','Giveaway','All']

    var fout = new discord.MessageEmbed()
    .setTitle("Je kunt alleen uit de volgende rollen kiezen.")
    .setDescription(roles)
    .setColor("BLUE");


    var embedRoleadded = new discord.MessageEmbed()
    .setDescription(`Succesvol ${roleSelected} toegevoegd.`)
    .setColor("BLUE");

    var embedRoleRemoved = new discord.MessageEmbed()
    .setDescription(`Succesvol ${roleSelected} Verwijderd.`)
    .setColor("BLUE");

    if(roleSelected == null){
        return message.reply(fout);
    }


    if (roleSelected === 'Sneak-Peak'){
        if(!message.member.roles.cache.get(sneakPeak)){
            message.member.roles.add(sneakPeak);
            message.channel.send(embedRoleadded);
        } else if(message.member.roles.cache.get(sneakPeak)) {
            message.member.roles.remove(sneakPeak);
            message.channel.send(embedRoleRemoved);
        }
    }





}

module.exports.help = {
    name: "toggle"
}