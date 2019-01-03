const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on("ready", function()  {
 bot.user.setGame("HELLO")
    console.log("LE");
});
bot.login("Var.Embed.enter");
