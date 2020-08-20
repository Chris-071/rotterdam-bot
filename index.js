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
    client.user.setActivity("Rotterdam The Netherlands", { type: "WATCHING" });
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

    var randomXp = Math.floor(Math.random(1) * 100) + 1;
    console.log(randomXp);

    var idUser = message.author.id

    if (!levelFile[idUser]) {

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }

    }

    levelFile[idUser].xp += randomXp;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 300

    if (nextLevelXp === 0) nextLevelXp = 100;

    if (xpUser >= nextLevelXp) {

        levelFile[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {
            if (err) console.log(err);
        });

    }


    var embedLevel = new discord.MessageEmbed()
    .setTitle("**Rank-Up!**")
    .setColor("#14e378")
    .addField("Level: ", levelFile[idUser].level)
    .addField("Aantal XP: ", levelFile[idUser].xp);

    message.channel.send(embedLevel);





});
