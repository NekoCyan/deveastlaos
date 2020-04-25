const Discord = require("discord.js");
const _client = new Discord.Client({disableEveryone: true});

const prefix = "+";

_client.login(process.env.token);

_client.on("ready", ()=>{
    console.log(`${_client.user.tag} ready!`);
    _client.user.setGame("Developer East Laos");
});

_client.on("message", async (message) =>{
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd == "eval"){
        if (message.guild.id != 701440318196809770) return;
        if (!args[0]) return message.channel.send("Put your code to Eval.");
        if (args.join(" ").toLowerCase().includes("process.exit")) return message.channel.send("Ex1t con cax.");
        if (args.join(" ").toLowerCase().includes("_client.destroy")) return message.channel.send("Destr0y con cax.");
        if (args.join(" ").toLowerCase().includes("_client.token")) return message.channel.send("T0ken con cax.");
        
        try {
            eval (args.join(" "));
        } catch (e) {
            message.channel.send(e);
        }
    }
    
    if (cmd == "help"){
        const embed = new Discord.RichEmbed()
        .setAuthor("Dev East Laos Help.")
        .setDescription("_client is Client.\nmessage is Message Client. (usually message.guild)");
        
        message.channel.send(embed);
    }
    
    //End Lines.
}
