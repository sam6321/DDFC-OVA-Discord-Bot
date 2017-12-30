const fs = require('fs');
const Discord = require('discord.js');
var funcs = require('../funcs.js');

exports.description = "Recieve a list of commands.";
exports.usage = "(prefix)help";

exports.call = function (bot, msg, args)
{
    let embed = new Discord.RichEmbed().setTitle("Command List");
    let desc = "**The prefix for this server is "+require(funcs.guildfolder(msg.guild)).prefix+"**\n\n";
    fs.readdir("./Commands", (err, files) => 
    {
        files.forEach(file => 
        {
            desc += "__***"+file.substr(0, file.length-3)+"**__\n"+require("./"+file).description+"\n\n";
            console.log(require("./"+file).description);
        });
        embed.setDescription(desc);
        msg.channel.send({embed});
        return;
    });
}
