const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const client = new discord.Client();
client.commands = new discord.Collection();
client.login(process.env.token)
const fs = require("fs");

client.on("ready", async () => {
    console.log(`Bot is online`);
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


client.on("messageDelete", messageDeleted => {


    if (messageDeleted.author.bot) return;

    var content = messageDeleted.content;
    if (!content) content = "Geen bericht gevonden.";

    var berichtLogDelEmbed = new discord.MessageEmbed()
        .setTitle("Bericht Verwijderd.")
        .addField("Gebruiker: ", messageDeleted.author.tag + ` (_${messageDeleted.author.id}_)`)
        .addField("Kanaal: ", messageDeleted.channel)
        .addField("Bericht: ", content)
        .setColor("BLUE");

    client.channels.cache.find(c => c.name == "berichten-logs").send(berichtLogDelEmbed);
});


client.on("message", async message => {

    const channel = message.guild.channels.get("788361937150148678");

    var localnummer = "1"
    var nummer = "1"
    var nextNummer = nummer + 1

    if (channel.awaitMessages.nummer == nextNummer) {
        message.react("✔");
    } else {
        message.react("❌");
    }
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
