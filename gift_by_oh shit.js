const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`gift by oh shit`);
});
// الاوامر : 
// prefix = m
// ms = عشان تسوي ستريمنق
// mw = عشان تسوي واتشنق 
// ml = عشان تسوي ليستنق 
// mn = عشان تغير اسمك 
// mp = عشان تسوي بلاينق
//لا تعدل ا ي شي عشان لا يخرب كل شي سويته مثل ما تبيه
// انسخ الـ كود ذا وحطه بملف server.js 
// ولا تنسى تضيف البكج بقلتش بدون البكج ما بتشتغل
var prefix = "21"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "416568006865584141") return;

  
  if (message.content.startsWith(prefix + 'w')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'l')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
} 


if (message.content.startsWith(prefix + 'n')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'a')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/nothello");
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'p')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
}
});


//مبروك عليك 
client.login("NDE2NTY4MDA2ODY1NTg0MTQx.XVulmA.TRjsLTkJat2mVuPvgGfRQCHkfBE");

