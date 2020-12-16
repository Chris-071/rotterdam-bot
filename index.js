const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const client = new discord.Client();
client.commands = new discord.Collection();
client.login(process.env.token)
const fs = require("fs");
const { message } = require("noblox.js");

const activiteiten = [
    `!help`,
    `Rotterdam The Netherlands`,
    `Bot gemaakt door: Chris071_`,
    `Game ~ SOON!`

];

client.on("ready", async () => {
    console.log(`Bot is online`);
    var i = 0;
    setInterval(() => client.user.setActivity(`${activiteiten[i++ % activiteiten.length]}`, { type: 'WATCHING', status: 'dnd' }), 1000);
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

    if (command === `${prefix}shutdown`) {
        if (message.author.id === "421717020288221186") {

            const wachtTijdTussen = "1000"
            const wachtijdSd = "2000"

            var embed1 = new discord.MessageEmbed()
                .setDescription(`Proces opstarten..`)
                .setColor("BLUE");

            var embed2 = new discord.MessageEmbed()
                .setDescription(`Proces laden..`)
                .setColor("BLUE");

            var embed3 = new discord.MessageEmbed()
                .setDescription(`Proces starten..`)
                .setColor("BLUE");

            var embed4 = new discord.MessageEmbed()
                .setDescription(`Proces klaarmaken..`)
                .setColor("BLUE");

            var embed5 = new discord.MessageEmbed()
                .setDescription(`Proces opgestart!`)
                .setColor("BLUE");

            var embed6 = new discord.MessageEmbed()
                .setDescription(`Shutdown klaarmaken..`)
                .setColor("BLUE");

            var embed7 = new discord.MessageEmbed()
                .setDescription(`Shuting Down..`)
                .setFooter(`Systeem is uitgeschakeld. Wacht tot de bot is uitgeschakeld en start hem dan opnieuw op.`)
                .setColor("BLUE");

            message.channel.send(embed1)

            setTimeout(() => {
                message.channel.send(embed2);
            }, wachtTijdTussen)

                (setTimeout(() => {
                    message.channel.send(embed3);
                }, wachtTijdTussen))

                (setTimeout(() => {
                    message.channel.send(embed4);
                }, wachtTijdTussen))

                (setTimeout(() => {
                    message.channel.send(embed5);
                }, wachtTijdTussen))

                (setTimeout(() => {
                    message.channel.send(embed6);
                }, wachtTijdTussen))

                (setTimeout(() => {
                    message.channel.send(embed7);
                    client.destroy(token);
                }, wachtijdSd))


        } else {
            message.reply(`Alleen de bot maken kan dit.`)
        }
    }

});
