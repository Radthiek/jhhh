const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
لأن سيرفر  فيه شوب واكواد خاصة لك
                               [ https://discord.gg/zuFJ7UP ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.token);
