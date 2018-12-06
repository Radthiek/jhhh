const Discord = require('discord.js');
const rad = new Discord.Client();

console.log("BOT ONLINE");
 
rad.on("guildMemberAdd", member => {
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

rad.login(process.env.token);
