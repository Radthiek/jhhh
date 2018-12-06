const Discord = require("discord.js");
const client = new Discord.Client();


  client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**هلا  نورت  سيرفر   تبقى دورك  هنا افضل  شوب واكواد  مجانيه ورهيبة ادخل وبس ** [https://discord.gg/zuFJ7UP]`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

