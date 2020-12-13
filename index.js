const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const client = new discord.Client();
client.commands = new discord.Collection();
client.login(process.env.token)
const fs = require("fs");
const levelFile = require("./data/levels.json");
const { join } = require("path");

client.on("ready", async () => {
    console.log(`Bot is online`);
    client.user.setStatus("dnd");
    client.user.setActivity("SOON ~ RTD [Rotterdam]", { type: "WATCHING" });
});



fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Files niet gevonden");
        return;
    };

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`${f} is geladen`)

        client.commands.set(fileGet.help.name, fileGet);
    });

});

client.on("guildMemberAdd", member => {

   var channel = member.guild.channels.cache.get('787651278226063400');

   if(!channel) return;

   var joinEmbed = new discord.MessageEmbed()
   .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
   .setDescription(`Welkom in ${member.guild.name}, ${member.user.username}.`)
   .setColor("BLUE");

   channel.send(joinEmbed);

});



client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

    var msg = message.content.toLowerCase();



});
