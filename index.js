const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const client = new discord.Client();
client.commands = new discord.Collection();
client.login(process.env.token)
const fs = require("fs");

client.on("ready", async () => {
    console.log(`Bot is online`);
    client.user.setStatus("dnd");
    client.user.setActivity("Rotterdam, The Netherlands | Made By Chris." , { type: "PLAYING" });
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

client.on("GuildMemberAdd", async () => {

    //733299156420001834
    var kanaal = message.guild.channels.cache.get('730747838077861949');

    var embed = new discord.MessageEmbed()
    .setTitle("Speler gejoind")
    .addField("Speler:", guild.member)
    .addField("Aantal leden:", message.guild.memberCount)
    .setColor("#14e378");

    kanaal.send(embed);



})



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
