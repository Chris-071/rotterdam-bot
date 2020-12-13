const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const client = new discord.Client();
client.commands = new discord.Collection();
client.login(process.env.token)
const fs = require("fs");
const levelFile = require("./data/levels.json");

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

    var channel = member.guild.channels.cache.find(channel => channel.name === 'joins');
    if (!channel) return;

    var joinEmbed = new discord.MessageEmbed()
        .setDescription(`Welkom in ${member.guild.name}, ${member}.`)
        .setColor("BLUE");

    channel.send(joinEmbed);

    //       .setFooter(`${message.guild.memberCount} Leden.`)

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
