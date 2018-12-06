const Discord = require("discord.js");
const client = new Discord.Client();


  client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**هلا نورت سيرفر حياك لسيرفرنا : {https://discord.gg/zuFJ7UP}**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

